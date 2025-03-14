export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function double(arr: number[]): number[] {
  return arr.map((num: number) => num * 2);
}

export function filterEven(arr: number[]): number[] {
  return arr.filter((num: number) => num % 2 === 0);
}

export function sum(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}

export function average(arr: number[]): number {
  return sum(arr) / arr.length;
}
