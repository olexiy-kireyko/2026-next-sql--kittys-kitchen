interface IngredientProps {
  ingredient: string;
  amount: number;
  unit_measurement: string;
}

export default function Ingredient({
  ingredient,
  amount,
  unit_measurement,
}: IngredientProps) {
  return (
    <ul className="flex list-none gap-2">
      <li>{amount}</li>
      <li>{unit_measurement}</li>
      <li>{ingredient}</li>
    </ul>
  );
}
