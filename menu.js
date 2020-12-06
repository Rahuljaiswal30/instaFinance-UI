
body.addEventListener("click", function(){
    // console.log("body clicked");
    submenu1.forEach(function(name){
        name.classList.remove("active-menu-1");
    })
})

//THIS IS MAIN MENU LINK 

menulink.forEach(function(menulink, indexofmenulink){
    menulink.addEventListener("click", function(e){
        e.stopPropagation();
        // console.log("Menu linked listner called");
        displaySubMenu1(indexofmenulink);
    });
});

var displaySubMenu1 = function(indexofmenulink){
    console.log("indexofmenulink - " + indexofmenulink)
    for(var i=0; i < menulink.length && i < submenu1.length; i++){
        if(i === indexofmenulink){
            console.log(i);
            submenu1[i].classList.toggle("active-menu-1");
        }else{
            submenu1[i].classList.remove("active-menu-1");
        }
    }
}

// this is sub menu 1 end

clickme.forEach(function(clickme, index){
    clickme.addEventListener("mouseover", function(e){
        e.stopPropagation();
        // console.log("Click me got called");
        // alert(index);
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

