//Import Notify library
import { Notify } from "notiflix"

export function letMsgEnterYouQuery() {
    return Notify.success(`You have not entered anything. Specify your request!`)
}

export function letMsgNoImagesByQuery() {
    return Notify.failure("Sorry, there are no images matching your search query. Please try again.")
}

export function letMsgAllImagesLoaded() {
    return Notify.failure("We're sorry, but you've reached the end of search results.")
}

export function letMsgTotalFindImages(total) {
    return Notify.success(`Hooray! We found ${total} images.`)
}


