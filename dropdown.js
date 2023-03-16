let dropdownMenu = document.getElementById("dropdown-categoria");
let dropitem = document.getElementById("dropdown-item");
let dropdownArrow = document.getElementById("seta-dropdown")
let dropstatus = false;

dropdownMenu.addEventListener('click', () => {

    if (dropstatus == false) {

        dropitem.style.display = "flex";
        dropitem.style.flexDirection = "Column";
        dropitem.style.color = "#000";
        dropstatus = true;
        dropdownArrow.style.rotate = "90deg";
    }
    else if (dropstatus == true) {

        dropitem.style.display = "none";
        dropdownArrow.style.rotate = "-0deg";
        dropstatus = false;
    }
})
