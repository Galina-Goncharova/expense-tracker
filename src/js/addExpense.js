import { allExpense } from "./state.js";
import { ref } from "./refs.js";
import { renderList } from "./renderList.js";
import { calculateTotal } from "./calculateTotal.js";

export function addExpense(e) {
  e.preventDefault();

  const name = ref.productNameEl.value;
  const amount = Number(ref.amountEl.value) || 0;

  if (!name || !amount) return;

  const newExpense = { name, amount };
  allExpense.push(newExpense);

  e.currentTarget.reset();
  renderList();
  calculateTotal();
}
