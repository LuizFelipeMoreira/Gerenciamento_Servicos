import { toggleModal } from "./Modal.js";
import InsertDataIntoTable from "./AddInTable.js";

const form = document.querySelector(".formModal");

const FormData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputsModal = form.children;
  console.log(form.nome.value);

  for (const input of inputsModal) {
    let children = (FormData[input.id] = input.children[1].value);
    //console.log(input.children[1].value);
  }
  toggleModal();
  console.log(FormData);
});
