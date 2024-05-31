
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const closeButton = modal.querySelector(".icon-modal-close");
    const openButton = document.querySelector(".button-together");
    const form = document.querySelector(".form-message");

    function openModal() {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
      document.addEventListener("keydown", function(event) {
          if (event.key === "Escape") {
            closeModal();
        }
  });
    openButton.addEventListener("click", openModal);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        openModal();
        form.reset();
    });
});