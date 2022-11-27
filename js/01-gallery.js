import { galleryItems } from './gallery-items.js';


// Change code below this line
console.log(galleryItems);
const galleryCards = document.querySelector('.gallery');
const cardsMarkup = createElementGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", cardsMarkup);
galleryCards.addEventListener('click', (e) => {
    e.preventDefault();
    const targetClick = e.target;
    if (!targetClick.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(
     (`<div class="modal"></div><img src="${e.target.dataset.source}" alt="${e.target.description}"> width="800" height="600"</div>`) ,
    {
      onShow: (instance) => {
        galleryCards.addEventListener("keydown", onEscapeButton);
      },

      onClose: (instance) => {
        galleryCards.removeEventListener("keydown", onEscapeButton);
      },
    }
  );

  instance.show();

  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
    
});


function createElementGallery(galleryItems) {
        return galleryItems.map(({ preview, original, description }) => {
            return `<div class="gallery__item" >
    <a class="gallery__link" href="${original}">
   <img class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"
   />
   </a>
   </div>`;
        })
            .join('');
            
    };
