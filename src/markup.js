//TODO Create markup
function createPictureCard(hits) {
    const { largeImageURL, webformatURL, tags } = hits;
    return /* html */`<li class="photo__card card-set-item">
    <a class="gallery__item" href="${largeImageURL}">
        <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" width=${hits.webformatWidth} height=${hits.webformatHeight}/>
    <ul class="info card-set">
        <li class="info__item card-set-item">
            <b>Likes</b>
            <span>${hits.likes}</span>
        </li>
        <li class="info__item card-set-item">
            <b>Views</b>
            <span>${hits.views}</span>
        </li>
        <li class="info__item card-set-item">
            <b>Comments</b>
            <span>${hits.comments}</span>
        </li>
        <li class="info__item card-set-item">
            <b>Downloads</b>
            <span>${hits.downloads}</span>
        </li>
    </ul>
    </a>
   </li>`
}

export function appendImagesContainerEl(hits, elements) {
    const markup = hits.map(createPictureCard).join('');
    elements.insertAdjacentHTML("beforeend", markup);
}

export function clearImagesContainerEl(elements) {
    elements.innerHTML = '';
}
