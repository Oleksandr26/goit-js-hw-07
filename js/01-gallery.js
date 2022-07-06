import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const pictureMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', pictureMarkup)

function createGalleryMarkup(pictures) {
    return pictures
    .map(({ preview, original, description }) => {
        return `    
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
        .join('');
}

galleryContainer.addEventListener('click', selectPicture);
const instance = basicLightbox.create(`<img src='' alt=''/>`,{
    onShow: () => document.addEventListener('keydown', onKeydownEsc),
	onClose: () => document.removeEventListener('keydown', onKeydownEsc)
});

function selectPicture(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const images = instance.element().querySelector('img');
    images.src = event.target.dataset.source;
    images.alt = event.target.alt
    instance.show()
}

function onKeydownEsc(event) {
    if (event.key === 'Escape') {
        instance.close();
    }
}

