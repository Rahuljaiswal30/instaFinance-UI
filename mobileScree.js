
var isOn = false;
// var submenu1 = document.querySelectorAll(".sub-menu-1");
var previssmall = false;


function callthis(){
    navMenuContainer.classList.toggle("visible-menu-container")
    console.log("you are inside media query");
}

// console.log("links.length  :   " + links.length)


function myFunction() {
    console.log("hit");

    // This will be true if currently windown is in small size
    var curifsmall = window.matchMedia("(max-width: 768px)").matches;
    var curifbig = window.matchMedia("(min-width: 768px)").matches;

    if(curifbig) {
        previssmall = false;
        toggleButton.removeEventListener("click", callthis);
        menulink.forEach(function(menulink){
            menulink.removeEventListener("click", onTop);
        });
        return;
    }

    if(curifsmall && previssmall) return;
    
    if (curifsmall) {
        toggleButton.addEventListener("click", callthis);
            menulink.forEach(function(menulink, indexOfMenuLink){
                function onTop() {
                // console.log("Indide onTop");
                console.log("indexofmenulink : -----" + indexOfMenuLink);
                // console.log("menulink.length " + links.length);
                    for(var i=0; i < links.length; i++)
                    {
                        console.log("value of i  " + i);

                        if(i === indexOfMenuLink){
                            if(isOn) {
                                links[i].style.position = "relative";
                                submenu1[i].style.position = "absolute";
                                // submenu1[i].style.left = "0px";
                                continue;
                            }
                            links[i].style.position = "absolute";
                            // console.log("first isOn : " + i);
                            // console.log(ancorContent[i].innerHTML);
                        }
                        else{
                            if(isOn) {
                                links[i].style.display = "block";
                                continue;    
                            }
                            // console.log("second IsOn : " + i);
                            links[i].style.display = "none";
                            // links[i].style.position = "fixed";
                        }
                    }
                    isOn = !isOn;
                }
            menulink.addEventListener("click", onTop);
            });
            
        
        previssmall = true;
    }
  } 



window.onresize = myFunction;
myFunction();


// var menuLink = document.querySelectorAll(".menu-link");
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
