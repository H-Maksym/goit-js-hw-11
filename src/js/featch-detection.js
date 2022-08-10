// export function featchBrowsDetection() {
//     if ('loading' in HTMLImageElement.prototype) {
//         const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//         console.log("🚀 ~ featchBrowsDetection ~ lazyImages", lazyImages)
//         lazyImages.forEach(img => {
//             img.src = img.dataset.src;
//             console.log(img.dataset.src);
//         })
//     } else {
//         const script = /* html */ `<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
//         integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
//         crossorigin = "anonymous"
//         referrerpolicy = "no-referrer";>
//         </script>`

//         document.body.insertAdjacentHTML('beforeend', script);
//     }
// }