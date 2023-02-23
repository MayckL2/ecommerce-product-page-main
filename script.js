let modal = document.querySelector(".modalCart")
let menu = document.querySelector("#menu")
let quant = document.querySelector("#quant")
let cont = 0 
let contCarr = 1
let carr = document.querySelector("#carr")
let modalCarr = document.querySelector(".imgBig")
let contModal = 1
let thumbs = document.querySelectorAll(".imgSmall img")
let cartProd= document.querySelector("#cartProd")
let indexCart = 1
let iconCart = document.querySelector(".iconCart")


// mostra os itens adcionados no carrinho
function openCart(){

    if(modal.style.display == "flex"){
        modal.style.display= "none"
    }else{
        modal.style.display= "flex"
    }
}

// mostra menu retratil para dispositivos menores
function openMenu(){
    menu.style.left= "0vw"
}

// esconde o menu retratil
function closeMenu(){
    menu.style.left= "-70vw"
}

// aumenta o contador de quantidade de produtos
function minus(){
    if(cont > 1){
        cont -= 1
    }
    quant.innerHTML = cont
}

// diminui o contador de quantidade de produtos
function plus(){
    cont += 1
    quant.innerHTML = cont
}

// cria carrossel em dispositivos menores
// next move para o proximo
function next(){
    if(contCarr < 4){
        contCarr += 1
    }
    carr.setAttribute("src", "images/image-product-"+ contCarr +"-thumbnail.jpg")
}

// prev move para o anterior
function prev(){
    if(contCarr != 1){
        contCarr -= 1
    }
    carr.setAttribute("src", "images/image-product-"+ contCarr +"-thumbnail.jpg")
}

// mostra proxima imagem do produto selecionado
function nextModal(){
    thumbs[contModal - 1].style.opacity= "1"
    if(contModal < 4){
        contModal += 1
    }
    modalCarr.setAttribute("src", "images/image-product-"+ contModal +".jpg")
    thumbs[contModal - 1].style.opacity= "0.5"
}

// mostra imagem anterior do produto selecionado
function prevModal(){
    thumbs[contModal - 1].style.opacity= "1"
    if(contModal != 1){
        contModal -= 1
    }
    modalCarr.setAttribute("src", "images/image-product-"+ contModal +".jpg")
    thumbs[contModal - 1].style.opacity= "0.5"
}

// abre modal de fotos do produto
function openModal(){
    document.querySelector(".modalCarr").style.display = "block"
}

// fecha modal de fotos do produto
function fechaCarr(){
    document.querySelector(".modalCarr").style.display = "none"
}

// verifica o tamanho da tela e adiciona ou remove a funçao de abrir modal
function check(){
    let imgProd = document.querySelectorAll(".imgProd")
    if(window.innerWidth > 800){
        imgProd[0].addEventListener("click", openModal)
        imgProd[1].addEventListener("click", openModal)
        imgProd[2].addEventListener("click", openModal)
        imgProd[3].addEventListener("click", openModal)
        imgProd[4].addEventListener("click", openModal)
    }else{
        imgProd[0].removeEventListener("click", openModal)
        imgProd[1].removeEventListener("click", openModal)
        imgProd[2].removeEventListener("click", openModal)
        imgProd[3].removeEventListener("click", openModal)
        imgProd[4].removeEventListener("click", openModal)
    }
}

// remove produtos do carrinho
function removeCart(e){
    let cardProds= document.querySelectorAll(".prod")
    cardProds[e].style.display= "none"
    
    // muda numero icone do carrinho
    iconCart.innerHTML = parseFloat(iconCart.innerHTML) - 1

    if(parseFloat(iconCart.innerHTML) == 0){
        iconCart.style.display= "none"
    }
}

// adiciona produtos ao carrinho
function addCart(){
    cartProd.innerHTML += `
    <div class="prod">
        <img src="images/image-product-1-thumbnail.jpg" alt="">
        <p>Fall limited Edition Sneaker</p>
        <p>$124,00 x `+ quant.innerHTML +`</p>
        <span>$`+ quant.innerHTML * 124 +`,00</span>
        <img onclick="removeCart(`+ indexCart +`)" src="images/icon-delete.svg" alt="">
    </div>`

    indexCart += 1

    iconCart.style.display= "block"

    // muda numero icone do carrinho
    iconCart.innerHTML = parseFloat(iconCart.innerHTML) + 1
}