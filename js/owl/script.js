var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

class MobileNavbar{
    constructor(mobileMenu, menu){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menu = document.querySelector(menu);        
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(){
        this.menu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick); 
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu"
);
mobileNavbar.init();