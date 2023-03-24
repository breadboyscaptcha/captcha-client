export function capitalizeAll(s: string, titlecase = false): string {
  return s.replace(/\w\S*/g, (str) => {
    return str.charAt(0).toUpperCase() +
      `${titlecase ? str.slice(1).toLowerCase() : str.slice(1)}`;
  });
}

export function capitalizeOne(s: string, titlecase = false): string {
  return s.charAt(0).toUpperCase() +
    `${titlecase ? s.slice(1).toLowerCase() : s.slice(1)}`;
}

export function getRandom<T>(arr: T[]): T {
  return Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : arr;
}

export function owo(txt: string): string {
  if (!txt) return "";
  return txt
    .replace(/(?:r|l)/g, "w")
    .replace(/(?:R|L)/g, "W")
    .replace(/n([aeou])/g, "ny$1")
    .replace(/N([aeou])/g, "Ny$1")
    .replace(/N([AEOU])/g, "Ny$1")
    .replace(/nyny/g, "nny")
    .replace(/NyNy/g, "NNy");
}
