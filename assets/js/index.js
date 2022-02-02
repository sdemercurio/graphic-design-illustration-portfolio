document.addEventListener("click", function (e){
if (e.target.classList.contains("ills-img")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('work-modal'));
    myModal.show();
}
});