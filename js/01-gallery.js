import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onImgClickHandler);

galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
  return galleryItems
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
</div> 
`;
    })
    .join("");
}


function onImgClickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${e.target.dataset.source}" width="1280" height="850">
    </div>
// `);
    
    instance.show();

    window.addEventListener("keydown", onKeyDownHandler);
    
    
    function onKeyDownHandler (e) {
      if (e.code === "Escape") {
        instance.close()
      }
       window.removeEventListener('keydown',  onKeyDownHandler)
    }

    
  }


  
}



