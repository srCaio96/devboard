export function generateId(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
};