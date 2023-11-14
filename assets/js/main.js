const nestedItem = document.querySelector(".nestedItem")
const nestedToggleMenu = document.querySelector(".nestedToggleMenu")
const arrow = document.querySelector(".arrow")

const writeInpToggle = document.querySelector(".writeInpRight p")
const writeInpWrap = document.querySelector(".writeInpWrap")
const writeInpLeft = document.querySelector(".writeInpLeft")

const menuToggle = document.querySelector(".menuToggle")
const aside = document.querySelector("aside")
const overlay = document.querySelector(".overlay")


nestedItem.addEventListener("click", () => {
    nestedToggleMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})



let isOpen = true
writeInpToggle.addEventListener("click", () => {
    if (isOpen) {
        writeInpLeft.style.opacity = "0"
        setTimeout(() => {
            writeInpLeft.classList.add("active")
            writeInpWrap.classList.add("active")
        }, 300);
        isOpen = false
    } else {
        writeInpLeft.style.opacity = "1"
        writeInpLeft.classList.remove("active")
        writeInpWrap.classList.remove("active")
        isOpen = true
    }
})


menuToggle.addEventListener("click", () => {
    aside.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    aside.classList.remove("active")
    overlay.classList.remove("active")
})



// custom dropdown functionality
function setupCustomSelect(selectId) {
    const selectContainer = document.getElementById(selectId);
    const selectStyled = selectContainer.querySelector('.select-styled');
    const selectOptions = selectContainer.querySelector('.select-options');

    selectStyled.addEventListener('click', function () {
        selectOptions.style.display = (selectOptions.style.display === 'block') ? 'none' : 'block';
    });

    selectContainer.querySelectorAll('.select-options div').forEach(function (option) {
        option.addEventListener('click', function () {
            selectStyled.innerText = this.innerText;
            selectOptions.style.display = 'none';
        });
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select') || e.target.closest('.custom-select') !== selectContainer) {
            selectOptions.style.display = 'none';
        }
    });
}

// Set up the custom selects
setupCustomSelect('customSelect1');
setupCustomSelect('customSelect2');