import { ref } from "./refs.js";
import { allExpense } from "./state.js";

export function renderList() {
  ref.listExpenseEl.innerHTML = "";
  allExpense.forEach((exp) => {
    const li = document.createElement("li");
    li.textContent = `${exp.name}: ${exp.amount}`;
    ref.listExpenseEl.append(li);
  });
}
