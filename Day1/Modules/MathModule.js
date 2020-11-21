export default function Addition(x, y) {
  return x + y;
}

function Multiplication(x, y) {
  return x * y;
}

export function AdditionMultiplication(x, y) {
  console.log(Addition(x, y));
  console.log(Multiplication(x, y));
}
