import {galleryItems} from './app.js'
const galleryMarkup=galleryItems.map(({preview,original,description})=>{
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `
}).join('')
const gallery=document.querySelector('.js-gallery')
gallery.innerHTML=galleryMarkup
gallery.addEventListener('click',handleGalleryClick)
function handleGalleryClick(event){
    event.preventDefault()
    if(event.target.nodeName !=='IMG'){
        return
    }
const image=event.target
const originalSrc=image.dataset.source
openModal()
setModalImage(originalSrc)
}
function openModal(){
    const lightbox=document.querySelector('.js-lightbox')
    lightbox.classList.add('is-open')
}
function setModalImage(src){
    const modalImage=document.querySelector('.lightbox__image')
    modalImage.src=src
    modalImage.alt='Image'
}
const closeButton=document.querySelector('[data-action="close-lightbox"]')
closeButton.addEventListener('click',closeModal)
function closeModal(){
    const lightbox=document.querySelector('.js-lightbox')
    const modalImage=document.querySelector('.lightbox__image')
    lightbox.classList.remove('is-open')
    modalImage.src=''
    modalImage.alt=''
}