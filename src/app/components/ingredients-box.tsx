import { useState } from "react";
import Image from "next/image";
import Ingredient from "./ingredient";
import { IngredientsProps } from "./recipe";

interface IngredientsBoxProps {
  ingredients: IngredientsProps[];
}

export default function IngredientsBox({ ingredients }: IngredientsBoxProps) {
  const [isCalculate, setIsCalculate] = useState(false);
  const [ingredientsForRecalc, setIngredientsForRecalc] = useState([]);
  const handlerIsCalculate = () => {
    const originalIngredients = ingredients.map((item) => item.amount);
    setIngredientsForRecalc(originalIngredients);
    setIsCalculate(!isCalculate);
    // localStorage.setItem("ingredients", JSON.stringify(ingredients));
  };

  const handlerChange = (i, value) => {
    console.log(i, value);
  };

  // const handlerCalculate = (e) => {
  //   const id = e.target.dataset.id;

  //   console.log(id);
  // };

  return (
    <>
      <p>Ingredients:</p>
      <p>original proportions:</p>

      <div className="flex gap-4">
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
        <div className="flex gap-6">
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
          <ul className="flex flex-col gap-2">
            {ingredientsForRecalc.map((item, i) => (
              <li key={i} className="grid grid-cols-2 gap-x-2 gap-y-3">
                <div className="w-24">
                  {isCalculate && (
                    <div
                      className="flex gap-2 cursor-pointer"
                      // data-id={item}
                      // onClick={handlerCalculate}
                    >
                      <input
                        type="number"
                        value={item}
                        className="border-amber-500 bg-blue-600 w-full h-full px-2 rounded-sm"
                        onChange={(e) => handlerChange(i, e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
