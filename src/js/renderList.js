import { ref } from "./refs.js";
import { allExpense } from "./state.js";

export function renderList() {
  if (allExpense.length === 0) {
    ref.listExpenseEl.textContent = "No expenses yet";
    return;
  }
  ref.listExpenseEl.innerHTML = "";
  allExpense.forEach(({ name, amount, id }) => {
    const li = document.createElement("li");
    li.textContent = `${name}: ${amount}`;
    li.dataset.id = id;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    li.append(btn);
    ref.listExpenseEl.append(li);
  });
}
