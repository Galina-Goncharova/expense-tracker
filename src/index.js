import { ref } from "./js/refs.js";
import { throttle } from "lodash";
import { addExpense } from "./js/addExpense.js";
import { createNewExpense } from "./js/addExpense.js";

ref.formEl.addEventListener("submit", addExpense);
// ref.formEl.addEventListener("input", throttle(createNewExpense));
