//TODO Function for Pixabay API.
const axios = require('axios');
import { spinner } from './refs'
const BASE_URL = "https://pixabay.com/api/";
const searchParams = new URLSearchParams({
    key: "29102312-f568916f6bd6fa3035ce49d72",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

export default class PixabayApiService {
    constructor() {
        this.searchQuery = '';
        this.per_page = 40;
        this.page = 1;
        this.hits = {};
        this.totalHits = 0;
        this.loading = false;
    }

    async fetchImage() {
        const url = `${BASE_URL}?${searchParams}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`;
        const response = await axios.get(url);
        this.hits = response.data.hits;
        this.totalHits = response.data.totalHits;
    }

    resetSetting() {
        this.searchQuery = '';
        this.per_page = 40;
        this.page = 1;
        this.hits = {};
        this.totalHits = 0;
        this.loading = false;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }


    get isDownloaded() {
        return this.loading;
    }

    set isDownloaded(newLoading) {
        this.loading = newLoading;
    }


    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}