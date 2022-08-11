//TODO Functional Simple Light Box
import SimpleLightbox from "simplelightbox";

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    showCounter: false
});

export default function lightboxRefresh() {
    lightbox.refresh();
}
