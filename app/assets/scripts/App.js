import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
let featureItemsRevealOnScroll = new RevealOnScroll(".feature-item");
let testimonialRevealOnScroll = new RevealOnScroll(".testimonial");

if (module.hot) {
  module.hot.accept()
}