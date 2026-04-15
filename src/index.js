import { ref } from "./js/refs.js";
import { addExpense } from "./js/addExpense.js";
import { removeExpense } from "./js/removeExpense.js";
import { KEY_LOCAL_STORAGE } from "./js/addExpense.js";
import { renderList } from "./js/renderList.js";
import { calculateTotal } from "./js/calculateTotal.js";
import { allExpense } from "./js/state.js";

const savedData = localStorage.getItem(KEY_LOCAL_STORAGE);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  allExpense.push(...parsedData);
  renderList();
  calculateTotal();
}

ref.formEl.addEventListener("submit", addExpense);
ref.listExpenseEl.addEventListener("click", removeExpense);
