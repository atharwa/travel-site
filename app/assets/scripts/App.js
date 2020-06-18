import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
//import Modal from './modules/Modal'

let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();
//new Modal();

let modal;
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if(typeof modal == "undefined") {
      import("./modules/Modal").then(
        (x) => {
          modal = new x.default();
          modal.openModal();
        }, 
        () => console.log("an error has occured"));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept()
}