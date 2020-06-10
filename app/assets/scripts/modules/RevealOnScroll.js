import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(selector) {
        this.itemsToReveal = document.querySelectorAll(selector);
        this.scrollThrottle = throttle(this.callScrollThrottle, 200).bind(this);
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.registerEvent();
    }

    hideInitially() {
        this.itemsToReveal.forEach((e) => {
            e.classList.add("reveal-item");
            e.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true;
    }

    registerEvent() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => { this.browserHeight = window.innerHeight; console.log("hello");}, 500));
    }

    callScrollThrottle() {
        this.itemsToReveal.forEach(e => {
            this.calculateScrolledWindow(e);
        });
    }

    calculateScrolledWindow(e) {
        if(window.scrollY + this.browserHeight > e.offsetTop) {
            let scrollPercent = (e.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollPercent < 75) {
                e.classList.add("reveal-item--is-visible");
                e.isRevealed = true;
                if(e.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }
}

export default RevealOnScroll;