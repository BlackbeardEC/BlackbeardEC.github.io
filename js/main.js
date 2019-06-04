// Select DOM elements
const menu = document.querySelector(".menu");
const menu_btn = document.querySelector(".menu-btn");
const menu_branding = document.querySelector(".menu-branding");
const menu_nav = document.querySelector(".menu-nav");
const nav_items = document.querySelectorAll(".nav-item");

// Initial menu state
let show_menu = false;

menu_btn.addEventListener("click", toggle_menu);

function toggle_menu() {
  if (!show_menu) {
    menu_btn.classList.add("close");
    menu.classList.add("show");
    menu_branding.classList.add("show");
    menu_nav.classList.add("show");
    nav_items.forEach(item => item.classList.add("show"));
    // Set state
    show_menu = true;
  } else {
    menu_btn.classList.remove("close");
    menu.classList.remove("show");
    menu_branding.classList.remove("show");
    menu_nav.classList.remove("show");
    nav_items.forEach(item => item.classList.remove("show"));
    // Set state
    show_menu = false;
  }
}
