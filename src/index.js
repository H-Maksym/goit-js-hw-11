//TODO Import
import '/src/sass/index.scss'
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import lightboxRefresh from './lightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PixabayApiService from "./pixabayApiService";


import { appendImagesContainerEl, clearImagesContainerEl } from "./markup";
import refs from './refs'

const { formEl, imagesContainerEl, btnLoad } = refs();

const pixabayApiService = new PixabayApiService();

//TODO callback from submit event
function onFormSubmit(e) {
    e.preventDefault();
    pixabayApiService.resetPage();
    pixabayApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
    pixabayApiService.fetchImage()
        .then(data => {
            Notify.success(`Hooray! We found ${data.totalHits} images.`)
            return data.hits;
        })
        .then(hits => {
            pixabayApiService.incrementPage();
            clearImagesContainerEl(imagesContainerEl);
            appendImagesContainerEl(hits, imagesContainerEl);
            lightboxRefresh();
        })
}

formEl.addEventListener("submit", onFormSubmit);
btnLoad.addEventListener("click", onBtnLoadClick);

function onBtnLoadClick(e) {
    pixabayApiService.incrementPage()
    pixabayApiService.fetchImage()
        .then(data => data.hits)
        .then(hits => {
            appendImagesContainerEl(hits, imagesContainerEl);
            lightboxRefresh();
        })
}

