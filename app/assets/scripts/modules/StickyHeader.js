import throttle from 'lodash/throttle'

class StickyHeader {
    constructor() {
        this.stickyHeader = document.querySelector(".site-header");
        this.callScrollThrottle = throttle(scrollThrottle, 200).bind(this);
    }

    registerEvent() {
        window.addEventListener("scroll", this.callScrollThrottle);
    }

    scrollThrottle() {
        let windowYPos = window.scrollY;
        if(windowYPos > 60) {
            this.stickyHeader.classList.add("site-header--dark");
        } else {
            this.stickyHeader.classList.remove("site-header--dark");
        }
    }
}

export default StickyHeader;