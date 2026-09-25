// document.body.children[0] = will access header or main probably (in the console)
// easier to use document.querySelector or document.querySelectorAll

const subMenuEl = document.querySelector(".submenu")
subMenuEl.classList.add("show")