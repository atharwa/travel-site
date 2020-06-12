import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from "./modules/StickyHeader"

let mobileMenu = new MobileMenu();
let featureItemsRevealOnScroll = new RevealOnScroll(".feature-item");
let testimonialRevealOnScroll = new RevealOnScroll(".testimonial");
let stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept()
}