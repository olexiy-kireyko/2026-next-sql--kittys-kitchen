import { loadJSON } from "@/src/lib/api";

export default async function Newest() {
  const recipes = await loadJSON("/temporary/recipes.json");
  return (
    <div>
      <main>
        <div>Newest recipes</div>
        <ul></ul>
      </main>
    </div>
  );
}
