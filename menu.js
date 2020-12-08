body.addEventListener("click", function(){
    // console.log("body clicked");
    submenu1.forEach(function(name){
        name.classList.remove("active-menu-1");
    })
})

//THIS IS MAIN MENU LINK

var arr = []
function getfuc(tempIdx) {
    function displaySubMenu1(e) {
        e.stopPropagation();
        console.log("from the big - " + tempIdx);
        for(var i=0; i < menulink.length && i < submenu1.length; i++){
            if(i === tempIdx){
                console.log(i);
                submenu1[i].classList.toggle("active-menu-1");
            }else{
                submenu1[i].classList.remove("active-menu-1");
            }
        }
    }
    return(displaySubMenu1);
}

// var tempIdx = 0;
// function displaySubMenu1(e) {
//     e.stopPropagation();
//     console.log("from the big - " + tempIdx);
//     for(var i=0; i < menulink.length && i < submenu1.length; i++){
//         if(i === tempIdx){
//             console.log(i);
//             submenu1[i].classList.toggle("active-menu-1");
//         }else{
//             submenu1[i].classList.remove("active-menu-1");
//         }
//     }
// }

function addBigListener() {
    for(var i = 0 ; i < menulink.length ; i++) {
        var ref = getfuc(i);
        menulink[i].addEventListener("click", ref);
        arr.push(ref);
    }
}

function removeBigListener() {
    menulink.forEach(function(menulink, idx){
        menulink.removeEventListener("click", arr[idx]);
    });
    arr = []
}



// this is sub menu 1 end

clickme.forEach(function(clickme, index){
    clickme.addEventListener("mouseover", function(e){
        e.stopPropagation();
        displayBlock(index);
    });
    clickme.addEventListener("click", function(e){
        e.stopPropagation();
    })
});

var displayBlock = function(index){
    // console.log("inside display block level 1 " + index + " clickme.lenght = " + clickme.length) ;
    for(var i=0; i < clickme.length && i < submenu2.length; i++){
        // console.log("inside display block level 2 " + index + " I am i =  " + i + " clickme.lenght = " + clickme.length ); 
        if(i === index){
            // console.log("inside display block level 3 " + index + " I am i =  " + i); 
            submenu2[i].classList.add("active-menu-2");
        }else{
            submenu2[i].classList.remove("active-menu-2");
        }
    } 
}

submenu2.forEach(function(submenu2){
    submenu2.addEventListener("click", function(e){
        e.stopPropagation();
    });
})

for(var j=0; j<special.length; j++){
    special[j].style.color = "blue";
}

for(var j=0; j<speciallink.length; j++){
    speciallink[j].style.color = "blue";
}

// var previssmall = false;



// function myFunc(){
//     var curifsmall = window.matchMedia("(max-width: 768px)").matches;
//     var curifbig = window.matchMedia("(min-width: 768px)").matches;
//     if(curifbig){

//     }

//     if(curifsmall && previssmall) return;

//     if(curifsmall){

//     }
// }

// window.onresize = myFunc;
// myFunc();