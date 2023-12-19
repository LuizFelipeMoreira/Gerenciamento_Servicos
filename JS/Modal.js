const buttonNewService = document.querySelector(".novoServico");
const modalContainer = document.querySelector(".modal-container");
const buttonCloseModal = document.querySelector(".buttonCloseModal");

export function toggleModal() {
  console.log("felipe");
  modalContainer.classList.toggle("ativo");
}

function outsideClick({ target }) {
  if (target === modalContainer) toggleModal();
}

buttonNewService.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);
modalContainer.addEventListener("click", outsideClick);
