// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const myGallery = document.querySelector('.gallery');
    const gallery = myGalleryMurkup(galleryItems);

    myGallery.insertAdjacentHTML('beforeend', gallery);
    console.log(myGallery)

  function myGalleryMurkup(galleryItems) {
    const murkupGallery = galleryItems.map(({preview, original,description}) => {
      return `<div class = "gallery__item">
              <a class = "gallery__item" href =  "${ preview}" >
              <img class = "gallery__image" src = '${ original}'
                 
                alt = ${description} />
              </a>
              </div>`;
            }).join(' ');

    return murkupGallery;
     }

     myGallery.addEventListener('click', clickPreview);


     function clickPreview(evt) {
       evt.preventDefault();
       if (!evt.target.classList.contains('gallery__image')) {return;}
        console.log(evt.target);

        let src = galleryItems.map(({src, description}) => {
          return `
                  <img class = "gallery__image"
                    src = '${src}'
                     alt = ${description}`;
                }).join(' ');

                let gallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionPosition:"bottom", captionDelay:250});
gallery.on('show.simplelightbox', function () {
	// do something…
   
});

              }

console.log(galleryItems);
