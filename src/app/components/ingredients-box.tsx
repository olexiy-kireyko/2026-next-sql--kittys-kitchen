import { useState } from "react";
import Image from "next/image";
import Ingredient from "./ingredient";
import { IngredientsProps } from "./recipe";

interface IngredientsBoxProps {
  ingredients: IngredientsProps[];
}

export default function IngredientsBox({ ingredients }: IngredientsBoxProps) {
  const originalIngredients = ingredients.map((item) => item.amount);

  const [isCalculate, setIsCalculate] = useState(false);
  const [ingredientsForRecalc, setIngredientsForRecalc] =
    useState(originalIngredients);

  const handlerIsCalculate = () => {
    setIsCalculate(!isCalculate);
  };

  const handlerChange = (i, value) => {
    const k = originalIngredients[i] / value;
    const recalcIngredients = originalIngredients.map((item, j) => {
      if (j !== i) {
        item = item / k;
      } else {
        item = value;
      }
      return item;
    });

    setIngredientsForRecalc(recalcIngredients);
  };

  return (
    <>
      <div className="flex gap-34">
        <p>Ingredients:</p>
        <div className="w-8 h-8 flex items-center justify-center overflow-hidden cursor-pointer">
          <Image
            onClick={handlerIsCalculate}
            width={32}
            height={32}
            src="/calculator.svg"
            alt="calculator"
            title="Click here to open recalculate menu"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-4">
          <p>original proportions:</p>
          <ul className="flex flex-col gap-2">
            {ingredients.map((item) => (
              <li
                key={item.ingredient_id}
                className="grid grid-cols-2 gap-x-2 gap-y-3"
              >
                <Ingredient
                  ingredient={item.ingredient}
                  amount={item.amount}
                  unit_measurement={item.unit_measurement}
                />
              </li>
            ))}
          </ul>
        </div>
        {isCalculate && (
          <div className="flex flex-col gap-4">
            <p>recalculated proportions:</p>
            <ul className="flex flex-col gap-2">
              {ingredientsForRecalc.map((item, i) => (
                <li key={i} className="grid grid-cols-2 gap-x-2 gap-y-3">
                  <ul className="flex list-none gap-2">
                    <li>
                      <div className="w-24">
                        <input
                          type="text"
                          value={+item}
                          className=" bg-blue-600 w-full h-full px-2 rounded-sm"
                          onChange={(e) => handlerChange(i, +e.target.value)}
                        />
                      </div>
                    </li>
                    <li>{ingredients[i].unit_measurement}</li>
                    <li>{ingredients[i].ingredient}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
