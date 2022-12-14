//TODO Import
import '/src/sass/index.scss'

//Import SimpleLightBox library + custom function
import "simplelightbox/dist/simple-lightbox.min.css";
import lightboxRefresh from './js/lightbox';

//Import Debounce library
const debounce = require('lodash.debounce');

//Import custom service Pixabay
import PixabayApiService from "./js/pixabayApiService";

//Import markup functional
import { appendImagesContainerEl, clearImagesContainerEl } from "./js/markup";

//Import refs DOM
import refs from './js/refs'

//Import custom notification 
import { letMsgEnterYouQuery, letMsgNoImagesByQuery, letMsgAllImagesLoaded, letMsgTotalFindImages } from "./js/message"

//import featchBrowsDetection from './js/featch-detection';

//Destructuring object
const { formEl, imagesContainerEl } = refs();

//Сreate an instance of the class
const pixabayApiService = new PixabayApiService();


//TODO Functional with add and remove listener;

const debounseScroll = debounce(infinityScroll, 100);

function addListener() {
    window.addEventListener("scroll", debounseScroll)
}

function removeListener() {
    window.removeEventListener("scroll", debounseScroll)
}

formEl.addEventListener("submit", onFormSubmit);



//TODO callback from submit event
async function onFormSubmit(e) {
    e.preventDefault();
    pixabayApiService.resetSetting();
    window.scrollTo(0, 0);
    clearImagesContainerEl(imagesContainerEl);
    pixabayApiService.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
    pixabayApiService.loading = false;


    try {
        await pixabayApiService.fetchImage();
        const { searchQuery, totalHits, hits } = pixabayApiService;
        if (!searchQuery) {
            return letMsgEnterYouQuery();
        }
        if (!totalHits) {
            return letMsgNoImagesByQuery();
        }
        letMsgTotalFindImages(totalHits);
        appendImagesContainerEl(hits, imagesContainerEl);
        lightboxRefresh();
        addListener();

    }
    catch (error) {
        console.log(error.message);
    }
}

//TODO callback from scroll event
async function infinityScroll(e) {

    const documentRect = document.documentElement.getBoundingClientRect();
    try {
        if (documentRect.bottom < document.documentElement.clientHeight + 300) {
            if (!(pixabayApiService.hits.length < pixabayApiService.per_page) && !(pixabayApiService.totalHits <= imagesContainerEl.children.length)) {
                pixabayApiService.incrementPage();
                await pixabayApiService.fetchImage();
                appendImagesContainerEl(pixabayApiService.hits, imagesContainerEl);
                lightboxRefresh();
            } else {
                if ((!pixabayApiService.loading)) {
                    removeListener();
                    pixabayApiService.loading = true;
                    letMsgAllImagesLoaded();
                }
            };
        }
    } catch (error) {
        console.log(error.message);
    }
}





