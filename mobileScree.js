
var isOn = false;
// var submenu1 = document.querySelectorAll(".sub-menu-1");
var previssmall = false;


function callthis(){
    navMenuContainer.classList.toggle("visible-menu-container")
    console.log("you are inside media query");
}

function getfuc2(idx) {
    function onTop() {
        for(var i=0; i < menulink.length; i++)
        {
            if(i === idx){
                if(isOn) {
                    menulink[i].style.position = "static";
                    if(i<submenu1.length) submenu1[i].style.display = null;
                    continue;
                }
                menulink[i].style.position = "absolute";
                if(i<submenu1.length) submenu1[i].style.display = "block";
            }
            else{
                if(isOn) {
                    menulink[i].style.display = "block";
                    continue;    
                }
                menulink[i].style.display = "none";
            }
        }
        isOn = !isOn;
    }
    return(onTop);
}

// console.log("links.length  :   " + links.length)
var arr2 = [];
function addSmallListener() {
    for(var i = 0 ; i < links.length ; i++) {
        var ref = getfuc2(i);
        links[i].addEventListener("click", ref);
        arr2.push(ref);
    }
}

function removeSmallListener() {
    links.forEach(function(links, idx){
        // console.log(" i am nested inside curifsmall you clicked me ");
        links.removeEventListener("click", arr2[idx]);
    });
    arr2 = [];
}

function myFunction() {
    console.log("hit");

    // This will be true if currently windown is in small size
    var curifsmall = window.matchMedia("(max-width: 768px)").matches;
    var curifbig = window.matchMedia("(min-width: 768px)").matches;

    if(curifbig) {
        console.log("i am curifbig");
        previssmall = false;
        toggleButton.removeEventListener("click", callthis);
        removeSmallListener();
        addBigListener();
        return;
    }

    if(curifsmall && previssmall) return;
    
    if (curifsmall) {
        toggleButton.addEventListener("click", callthis);
        removeBigListener();
        addSmallListener();
        previssmall = true;
    }
  } 
window.onresize = myFunction;
myFunction();


// var links = document.querySelectorAll(".menu-link");
// var ancorContent = document.querySelectorAll(".menu-link > a");
// var toggleButton = document.getElementById("icon-burger");
// var navMenuContainer = document.querySelector(".nav-menu-container");
// var isOn = false;
// var submenu1 = document.querySelectorAll(".sub-menu-1");


// function myFunction() {
//     x = window.matchMedia("(max-width: 768px)");
   
//     if (x.matches) {

//         toggleButton.addEventListener("click", function(){
//             navMenuContainer.classList.toggle("visible-menu-container")
//             console.log("you are inside media query");
//         });
    
        // menulink.forEach(function(menuLink, indexOfMenuLink){
        //     menuLink.addEventListener("click", function(){
        //         onTop(indexOfMenuLink);
        //     });
        // });
//     }
//     else {
//         for(var i = 0 ; i < submenu1.length ; i++) {
//             submenu1[i].classList.remove("active-menu-1");
//         }
//         for(var i = 0 ; i < menulink.length ; i++) {
//             menulink[i].style.position = "static";
//             menulink[i].style.display = "flex";
//         }
//     }
//   } 

//     var displaySubMenu1 = function(indexofmenulink){
//         console.log("indexofmenulink - " + indexofmenulink)
//         for(var i=0; i < menulink.length && i < submenu1.length; i++){
//             if(i === indexofmenulink){
//                 console.log(i);
//                 submenu1[i].classList.toggle("active-menu-1");
//             }else{
//                 submenu1[i].classList.remove("active-menu-1");
//             }
//         }
//     }

//   var onTop = function(index){
//     x = window.matchMedia("(max-width: 768px)");
//     if(!x.matches) return;
//       console.log("Indide onTop");
//     for(var i=0; i < menuLink.length; i++){
//         if(i === index){
//             if(isOn) {
//                 menuLink[i].style.position = "relative";
//                 continue;
//             }
//             console.log(i);
//             menuLink[i].style.position = "absolute";
//             console.log(ancorContent[i].innerHTML);
//         }
//         else{
//             if(isOn) {
//                 menuLink[i].style.display = "block";
//                 continue;    
//             }
//             menuLink[i].style.display = "none";
//             // menuLink[i].style.position = "fixed";
//         }
//     }
//     isOn = !isOn;
// }

// window.onresize = myFunction;
// myFunction();
