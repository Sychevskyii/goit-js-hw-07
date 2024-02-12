import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", onModalShow);

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

const instance = basicLightbox.create(`<img src="">`, {
  onShow: () => {
    document.addEventListener("keydown", onEsc);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEsc);
  },
});

function onModalShow(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  instance.element().querySelector("img").src = e.target.dataset.source;

  instance.show();
}

function onEsc(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
