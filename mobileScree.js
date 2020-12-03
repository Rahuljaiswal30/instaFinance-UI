// alert("you triggered mobile scree  ")

var toggleButton = document.getElementById("icon-burger");
var navMenuContainer = document.querySelector(".nav-menu-container");

toggleButton.addEventListener("click", function(){
    navMenuContainer.classList.toggle("visible-menu-container")
})