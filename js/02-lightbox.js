import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  })
  .join("");

galleryList.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionSelector: "img",
  captionPosition: "bottom",
  captionDelay: 250,
});
