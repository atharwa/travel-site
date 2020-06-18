class Modal {
    constructor() {
        this.injectModal();
        this.registerEvent();
    }

    registerEvent() {
        this.openModalButtons = document.querySelectorAll(".open-modal");
        this.closeModalButton = document.querySelector(".modal__close");

        this.openModalButtons.forEach((el) => {
          el.addEventListener("click",e => this.openModal(e));
        });
        this.closeModalButton.addEventListener("click",e => this.closeModal(e));
    }

    openModal(e) {
      e.preventDefault();
      this.modalDiv = document.querySelector(".modal");
      this.modalDiv.classList.add("modal--is-visible");
    }

    closeModal(e) {
      this.modalDiv = document.querySelector(".modal");
      this.modalDiv.classList.remove("modal--is-visible");
    }

    injectModal() {
      document.body.insertAdjacentHTML('beforeend',
      `<div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>`);
    }
}

export default Modal;

