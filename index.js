let dropdownMenu = document.getElementById("dropdown-categoria");
let dropitem = document.getElementById("dropdown-item");
let dropdownArrow = document.getElementById("seta-dropdown")
let dropstatus = false;

dropdownMenu.addEventListener('click', () => {
    console.log(dropdownMenu)
    if (dropstatus == false) {
        console.log("mostrando dropdown")
        dropitem.style.display = "flex";
        dropitem.style.flexDirection = "Column";
        dropitem.style.color = "#000";
        dropstatus = true;
        dropdownArrow.style.rotate = "90deg";
    }
    else if (dropstatus == true) {
        console.log("escondendo o texto")
        dropitem.style.display = "none";
        dropdownArrow.style.rotate = "-0deg";
        dropstatus = false;
    }
}) 