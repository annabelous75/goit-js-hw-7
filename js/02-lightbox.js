import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryCards = document.querySelector('.gallery');
const cardsMarkup = createElementGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", cardsMarkup);
function createElementGallery(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        })
            .join('');
            
};
const lightBox = new SimpleLightbox('.gallery__item', {
    captionDate: 'alt',
    captionDelay: 250,
});