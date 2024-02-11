import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

galleryEl.addEventListener("click", getLargeImageUrl);
let largeImageUrl = "";

function getLargeImageUrl(e) {
  e.preventDefault();

  const isGalleryLink = e.target.classList.contains("gallery__image");

  if (!isGalleryLink) {
    return;
  }

  largeImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
`);

  instance.show();
}
