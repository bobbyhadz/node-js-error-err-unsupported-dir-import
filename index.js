// Error [ERR_UNSUPPORTED_DIR_IMPORT] in Node.js [Solved]

// 👇️ named export
export function increaseSalary(salary) {
  return salary + 100;
}

// 👇️ named export
export const department = 'accounting';

// 👇️ default export
export default function multiply(a, b) {
  return a * b;
}
