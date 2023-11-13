const nestedItem = document.querySelector(".nestedItem")
const nestedToggleMenu = document.querySelector(".nestedToggleMenu")
const arrow = document.querySelector(".arrow")


nestedItem.addEventListener("click", () => {
    nestedToggleMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})