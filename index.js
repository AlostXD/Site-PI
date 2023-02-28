let dropdownMenu = document.getElementById("dropdown");
let dropitem = document.getElementById("dropdown-item");

dropdownMenu.addEventListener('click', () => {
    dropitem.style.display = "block";
    dropitem.style.color = "#000"
}) 