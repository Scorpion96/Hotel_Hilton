var photos = [
  'images/large/first_gal.jpg',
  'images/large/second_gal.jpg',
  'images/large/third_gal.jpg',
  'images/large/fourth_gal.jpg',
  'images/large/fifth_gal.jpg',
  'images/large/sixth_gal.jpg',
  'images/large/seventh_gal.jpg',
  'images/large/eigths_gal.jpg',
  'images/large/ninth_gal.jpg',
  'images/large/tens_gal.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}
