import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const pictureMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', pictureMarkup)

function createGalleryMarkup(pictures) {
    return pictures
    .map(({ preview, original, description }) => {
        return `    
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
             src="${preview}"
             alt="${description}" />
</a>
        </li>`;
    })
        .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // captionPosition:'bottom',
});

/* <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> */