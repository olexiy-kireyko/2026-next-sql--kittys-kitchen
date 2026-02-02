import { useState } from "react";
import Image from "next/image";
import Ingredient from "./ingredient";
import { IngredientsProps } from "./recipe";

interface IngredientsBoxProps {
  ingredients: IngredientsProps[];
}

export default function IngredientsBox({ ingredients }: IngredientsBoxProps) {
  const [isCalculate, setIsCalculate] = useState(false);
  const handlerIsCalculate = () => {
    setIsCalculate(!isCalculate);
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  };

  const handlerChange = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
  };

  const handlerCalculate = (e) => {
    const id = e.target.dataset.id;
    const id2 = e.target.dataset.id;
    console.log(id);
  };

  return (
    <>
      <p>Ingredients:</p>
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
          {ingredients.map((item) => (
            <li
              key={item.ingredient_id}
              className="grid grid-cols-2 gap-x-2 gap-y-3"
            >
              <div className="w-24">
                {isCalculate && (
                  <div
                    className="flex gap-2 cursor-pointer"
                    data-id={item.ingredient_id}
                    onClick={handlerCalculate}
                  >
                    <input
                      type="number"
                      defaultValue={item.amount}
                      className="border-amber-500 bg-blue-600 w-full h-full px-2 rounded-sm"
                      disabled
                    />
                    <div className="w-6 h-6 flex items-center justify-center overflow-hidden cursor-pointer">
                      <Image
                        width={24}
                        height={24}
                        src="/calculator.svg"
                        alt="calculator"
                        title="Click here to change amount"
                      />
                    </div>
                  </div>
                )}
              </div>
              <Ingredient
                ingredient={item.ingredient}
                amount={item.amount}
                unit_measurement={item.unit_measurement}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
