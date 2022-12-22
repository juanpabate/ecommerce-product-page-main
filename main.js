//Añadir el número de productos deseados 
const minusButton= document.querySelector('.input__minus');
const plusButton= document.querySelector('.input__plus');
let counterInput= document.querySelector('.input__number')

let cartContent= document.querySelector('.cart-modal__content');

let productCounter= 0;
let productsAdded= 0;


if(productsAdded== 0){
    cartContent.innerHTML= `<p class= "cart__empty">Your cart is empty<p/>`;
}

plusButton.addEventListener('click', ()=>{
    productCounter++;
    counterInput.value= productCounter;
});

minusButton.addEventListener('click', ()=>{
    productCounter--;
    if(productCounter<= 0){
        productCounter=0;
    }
    counterInput.value= productCounter;
});

//Añadiendo productos al carrito cuando se hunda el botón 
const cartNotification= document.querySelector('.header__cart--notification');
const addButton= document.querySelector('.details__button');

let cartPrice= document.querySelector('.cart-modal__price');

addButton.addEventListener('click', ()=>{
    productsAdded= productsAdded + productCounter;
    if(productsAdded== 0){
        cartNotification.style.display= 'none';
    }else{
        cartNotification.style.display= 'block';
        cartNotification.innerText= productsAdded;
    }

    cartContent.innerHTML= `<div class="cart-modal__details">
        <img src="images/image-product-1-thumbnail.jpg" alt="" class="cart-modal__image">
        <div>
        <p class="cart-modal__product">Fall limited Edition Sneakers</p>
        <p class="cart-modal__price">$125.00 x${productsAdded} <span>$${productsAdded* 125}.00</span></p>
            </div>
        <img src="images/icon-delete.svg" alt="" class="cart-modal__delete">
        </div>
        <button class="cart-modal__checkout button">Checkout</button>`
        const cartDelete= document.querySelector('.cart-modal__delete');

        // Borrando cuando hagan click en la papelera
            cartDelete.addEventListener('click', ()=>{
            productsAdded= 0;
            cartNotification.innerText= 0;
            cartNotification.style.display= 'none';
            cartContent.innerHTML= `<p class= "cart__empty">Your cart is empty<p/>`
        }); 
});

//Abriendo el carrito modal
const cartButton= document.querySelector('.header__cart');
const cartModal= document.querySelector('.cart-modal');


cartButton.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');
});

//Pasando imágenes con las flechas
let imageCounter= 0;
const galleryPrevious= document.querySelector('.gallery__previous');
const galleryNext= document.querySelector('.gallery__next');
const galleryImageContainer= document.querySelector('.gallery__image-container');

galleryNext.addEventListener('click', ()=>{
    imageCounter++;
    if(imageCounter== 4){
        imageCounter= 0;
    }
    changeImageArrows(galleryImageContainer);
});

galleryPrevious.addEventListener('click', ()=>{
    imageCounter--;
    if(imageCounter== -1){
        imageCounter= 3;
    }
    changeImageArrows(galleryImageContainer);
});

//Cambiando imágenes con thumbnails
const thumbnail1= document.getElementById('1');
const thumbnail2= document.getElementById('2');
const thumbnail3= document.getElementById('3');
const thumbnail4= document.getElementById('4');


thumbnail1.addEventListener('click', ()=>{
    changeImageThumbnails(galleryImageContainer, 1);
});
thumbnail2.addEventListener('click', ()=>{
    changeImageThumbnails(galleryImageContainer, 2);
});
thumbnail3.addEventListener('click', ()=>{
    changeImageThumbnails(galleryImageContainer, 3);
});
thumbnail4.addEventListener('click', ()=>{
    changeImageThumbnails(galleryImageContainer, 4);
});

//Aparecer galería modal y cambiarle imágenes
let modalImageCounter= 0;

const galleryModal= document.querySelector('.modal-gallery__background');
const galleryModalClose= document.querySelector('.modal-gallery__close');

const modalThumbnail1= document.getElementById('m1');
const modalThumbnail2= document.getElementById('m2');
const modalThumbnail3= document.getElementById('m3');
const modalThumbnail4= document.getElementById('m4');
const thumbnails= [modalThumbnail1, modalThumbnail2, modalThumbnail3, modalThumbnail4];

const modalGalleryContain= document.querySelector('.modal-gallery__contain');
const modalPrevious= document.querySelector('.modal-gallery__previous');
const modalNext= document.querySelector('.modal-gallery__next');


galleryImageContainer.addEventListener('click', ()=>{
    if(window.innerWidth>= 1000){
        galleryModal.style.display= 'block';
        modalImageCounter= 0;
    }
    thumbnails[0].style.border= '4px solid hsl(26, 100%, 55%)';
});
galleryModalClose.addEventListener('click', ()=>{
    galleryModal.style.display= 'none';
    modalGalleryContain.style.backgroundImage= 'url(../images/image-product-1.jpg)'
    for(item of thumbnails){
        item.style.border= 'none';
    }
});

modalPrevious.addEventListener('click', ()=>{
    modalImageCounter--;
    if(modalImageCounter< 0){
        modalImageCounter= 3;
    }
    changeImageArrowsThumbnail(modalGalleryContain);
});
modalNext.addEventListener('click', ()=>{
    modalImageCounter++;
    if(modalImageCounter> 3){
        modalImageCounter= 0;
    }
    changeImageArrowsThumbnail(modalGalleryContain);
});

//Abrir el modal navbar
const modalNavbar= document.querySelector('.modal-navbar__background');
const modalNavbarClose= document.querySelector('.modal-navbar__close');
const hamburguerMenu= document.querySelector('.header__menu');

hamburguerMenu.addEventListener('click', ()=>{
    modalNavbar.style.display= 'block';
});

modalNavbarClose.addEventListener('click', ()=>{
    modalNavbar.style.display= 'none';
});

//FUNCIONES
function changeImageArrows(box){
    box.style.backgroundImage= `url(images/image-product-${imageCounter + 1}.jpg)`;
}

function changeImageThumbnails(box, number){
    box.style.backgroundImage= `url(images/image-product-${number}.jpg)`;
}

function changeImageArrowsThumbnail(box, thumbnail){
    for(item of thumbnails){
        item.style.border= 'none';
    }
    thumbnail= thumbnails[modalImageCounter];
    box.style.backgroundImage= `url(images/image-product-${modalImageCounter + 1}.jpg)`;
    thumbnail.style.border= '4px solid hsl(26, 100%, 55%)';
    console.log(thumbnail);
}