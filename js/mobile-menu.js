(() => {
  const refs = {
    togglerMenu: document.querySelector("[data-menu-button]"),
    Menu: document.querySelector("[data-menu]")
  };

  refs.togglerMenu.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.togglerMenu.classList.toggle("is-open");
    refs.Menu.classList.toggle("is-closed");
    document.body.classList.toggle("off_overflow");
  }
})();