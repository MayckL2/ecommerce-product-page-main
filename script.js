
function openCart(){
    let modal = document.querySelector(".modalCart")

    if(modal.style.display == "flex"){
        modal.style.display= "none"
    }else{
        modal.style.display= "flex"
    }
    
}

let menu = document.querySelector("#menu")
function openMenu(){

    menu.style.left= "0vw"
}

function closeMenu(){
    menu.style.left= "-70vw"
}

let quant = document.querySelector("#quant")
let cont = 0 
function minus(){
    if(cont > 1){
        cont -= 1
    }
    quant.innerHTML = cont
}

function plus(){
    cont += 1
    quant.innerHTML = cont
}

let contCarr = 1
let carr = document.querySelector("#carr")
function next(){
    if(contCarr > 0 && contCarr < 5){
        contCarr += 1
    }
    carr.setAttribute("src", "images/image-product-"+ contCarr +"-thumbnail.jpg")
}

function prev(){
    if(contCarr > 0 && contCarr < 5){
        contCarr -= 1
    }
    carr.setAttribute("src", "images/image-product-"+ contCarr +"-thumbnail.jpg")
}