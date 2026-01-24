export interface Path {
  path: string;
}

export async function loadJSON(path: Path) {
  const res = await fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid network response ");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch operation problem:", error);
    });
  return res.data;
}
