import { allExpense } from "./state.js";
import { ref } from "./refs.js";
import { renderList } from "./renderList.js";
import { calculateTotal } from "./calculateTotal.js";
import { KEY_LOCAL_STORAGE } from "./addExpense.js";

export function removeExpense(e) {
  if (e.target.nodeName !== "BUTTON") return;
  const confirmDelete = confirm("Удалить?");
  if (!confirmDelete) return;
  const key = e.target;
  if (key.nodeName !== "BUTTON") return;
  const li = e.target.closest("li");
  const id = Number(li.dataset.id);
  const index = allExpense.findIndex((item) => item.id === id);
  allExpense.splice(index, 1);
  renderList();
  calculateTotal();
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(allExpense));
}
