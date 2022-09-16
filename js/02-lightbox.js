import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector('.gallery')

listGalleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems))
listGalleryRef.addEventListener('click', simpleGalleryHandler)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
    }).join('');
}

function simpleGalleryHandler(event) { 
    event.preventDefault()

    if (event.target !== "IMG") { 
        return
    }
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// event.target.dataset.source = 
});
}