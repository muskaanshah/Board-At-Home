const modal = document.querySelector("#modal");
const itemclose = document.querySelectorAll(".close-button");
const modalclose = document.querySelector(".modal-close");

for (var i = 0; i < itemclose.length; i++) {
    itemclose[i].addEventListener("click", () => {
        modal.classList.add("modal-open");
    })
}

modalclose.addEventListener("click", () => {
    modal.classList.remove("modal-open");
})
