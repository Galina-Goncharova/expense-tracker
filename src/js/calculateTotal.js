import { ref } from "./refs.js";
import { allExpense } from "./state.js";

export function calculateTotal() {
  const total = allExpense.reduce((acc, exp) => {
    return (acc += exp.amount);
  }, 0);
  ref.sumNumberEl.textContent = total;
}
