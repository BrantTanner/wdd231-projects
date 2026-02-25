const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector(".close-button");
const modalEl = document.querySelector("#modal");

function openModal() {
    modalEl.classList.add("open");
    modalEl.setAttribute("aria-hidden", "true");
}
function closeModal() {
    modalEl.classList.remove('open');
    modalEl.setAttribute("aria-hidden", "false");
}

openButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal)

document.addEventListener('keydown', function(event){
    if (event.key === "Escape"){
        closeModal();
    }
});

window.addEventListener('click', function(event){
    if (event.target === modalEl){
        closeModal();
    }
});