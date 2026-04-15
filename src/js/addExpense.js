import { allExpense } from "./state.js";
import { ref } from "./refs.js";
import { renderList } from "./renderList.js";
import { calculateTotal } from "./calculateTotal.js";

export const KEY_LOCAL_STORAGE = "state-expense-tracker";

export function addExpense(e) {
  e.preventDefault();

  const name = ref.productNameEl.value;
  const amount = Number(ref.amountEl.value) || 0;

  if (!name || !amount) return;

  const newExpense = { name, amount, id: Date.now() };
  allExpense.push(newExpense);
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(allExpense));
  e.currentTarget.reset();
  renderList();
  calculateTotal();
}
