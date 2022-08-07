//TODO Function for Pixabay API.

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
        this.page = 1;
        this.per_page = 40;
    }

    fetchImage() {
        return fetch(`${BASE_URL}?${searchParams}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`)
            .then(this.onStatusFetch)
    }

    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }

    onStatusFetch(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}