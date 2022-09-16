import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

galleryRef.addEventListener('click', onImgClickHandler)




function createGalleryMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
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
</div> 
`
    }).join('');
}

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems))


function onImgClickHandler(e) { 
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') { 
       return
    }

    for (const object of galleryItems) {
        e.target.dataset.source = object.original;
      
    }
        
    
}