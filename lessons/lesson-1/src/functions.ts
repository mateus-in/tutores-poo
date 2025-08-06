interface MathFunc {
  (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
};

const value = sum(2, 3);

const log = (message: string): void => {
  console.log(message);
};
