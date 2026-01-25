export async function loadJSON(path: string) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
}
