const nestedItem = document.querySelector(".nestedItem")
const nestedToggleMenu = document.querySelector(".nestedToggleMenu")
const arrow = document.querySelector(".arrow")


const menuToggle = document.querySelector(".menuToggle")
const aside = document.querySelector("aside")
const overlay = document.querySelector(".overlay")


nestedItem.addEventListener("click", () => {
    nestedToggleMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})




menuToggle.addEventListener("click", () => {
    aside.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    aside.classList.remove("active")
    overlay.classList.remove("active")
})




