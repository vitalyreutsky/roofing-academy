import GraphModal from "graph-modal";

//modal
const modal = new GraphModal();

const modalClose = document.querySelectorAll(".graph-modal__close");
const formBtn = document.querySelector(".form__btn");
const checkbox = document.querySelector(".custom-checkbox__field");

modalClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.close("modal");
  });
});

//проверка checkbox
checkbox.addEventListener("change", () => {
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkbox.checked) {
      modal.close("modal");
      modal.open("modal-success");
    }
  });
});
