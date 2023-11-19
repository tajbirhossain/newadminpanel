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



function setupCustomSelect(selectId) {
    const selectContainer = document.getElementById(selectId);
    const selectStyled = selectContainer.querySelector('.select-styled');
    const selectOptions = selectContainer.querySelector('.select-options');

    selectStyled.addEventListener('click', function () {
        selectOptions.style.display = (selectOptions.style.display === 'block') ? 'none' : 'block';
    });

    selectContainer.querySelectorAll('.select-options div').forEach(function (option) {
        option.addEventListener('click', function () {
            // Get the data attribute value containing the image source
            const imgSrc = this.getAttribute('data-img-src');

            // Update the content of the styled select with both text and image
            selectStyled.innerHTML = `
                <img src="${imgSrc}" alt="">
                ${this.innerText}
            `;

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