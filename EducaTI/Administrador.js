class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

function ano1a(){
  document.getElementById("mostrar-sala").innerHTML = "1 Ano A"
}
function ano1b(){
  document.getElementById("mostrar-sala").innerHTML = "1 Ano B"
}
function ano2a(){
  document.getElementById("mostrar-sala").innerHTML = "2 Ano A"
}
function ano2b(){
  document.getElementById("mostrar-sala").innerHTML = "2 Ano B"
}
function ano3a(){
  document.getElementById("mostrar-sala").innerHTML = "3 Ano A"
}
function ano3b(){
  document.getElementById("mostrar-sala").innerHTML = "3 Ano B"
}
function ano4a(){
  document.getElementById("mostrar-sala").innerHTML = "4 Ano A"
}
function ano4b(){
  document.getElementById("mostrar-sala").innerHTML = "4 Ano B"
}
function ano5a(){
  document.getElementById("mostrar-sala").innerHTML = "5 Ano A"
}
function ano5b(){
  document.getElementById("mostrar-sala").innerHTML = "5 Ano B"
}
function ano6a(){
  document.getElementById("mostrar-sala").innerHTML = "6 Ano A"
}
function ano6b(){
  document.getElementById("mostrar-sala").innerHTML = "6 Ano B"
}
function ano7a(){
  document.getElementById("mostrar-sala").innerHTML = "7 Ano A"
}
function ano7b(){
  document.getElementById("mostrar-sala").innerHTML = "7 Ano B"
}
function ano8a(){
  document.getElementById("mostrar-sala").innerHTML = "8 Ano A"
}
function ano8b(){
  document.getElementById("mostrar-sala").innerHTML = "8 Ano B"
}
function ano9a(){
  document.getElementById("mostrar-sala").innerHTML = "9 Ano A"
}
function ano9b(){
  document.getElementById("mostrar-sala").innerHTML = "9 Ano B"
}