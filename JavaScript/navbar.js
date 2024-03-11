window.addEventListener('DOMContentLoaded', () => {
    let x = document.querySelector('.dropdown-content');
    (x.style.display = 'none')
}, false);

function navbarToggle() {
    let x = document.querySelector(".dropdown-content");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}