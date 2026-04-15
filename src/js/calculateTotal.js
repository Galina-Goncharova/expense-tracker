import { ref } from "./refs.js";
import { allExpense } from "./state.js";

export function calculateTotal() {
  const total = allExpense.reduce((acc, exp) => {
    return (acc += exp.amount);
  }, 0);
  const sum = ref.sumNumberEl;
  sum.textContent = total;
  if (total > 500) {
    sum.style.color = "red";
  } else {
    sum.style.color = "green";
  }
}
