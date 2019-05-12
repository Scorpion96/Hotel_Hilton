var popup = document.querySelector('.modal');
var openPopupButton = document.querySelectorAll('.button-open');
var closePopupButton = popup.querySelector('.button-close');


for (var i = 0; i < openPopupButton.length; i++) {
	openPopupButton[i].addEventListener('click', function (evt) {
  	evt.preventDefault();
  	popup.classList.add('modal--show');
	});
}

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--show');
  }
});

/*slider*/

var slides = document.querySelectorAll('#slides_room .slide_room');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
 

function nextSlide() {
 goToSlide(currentSlide + 1);
}

function previousSlide() {
 goToSlide(currentSlide - 1);
}

function goToSlide(n) {
 slides[currentSlide].className = 'slide_room';
 currentSlide = (n + slides.length) % slides.length;
 slides[currentSlide].className = 'slide_room showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');
 
next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

var playing = true;
var pauseButton = document.getElementById('pause');
 
function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
};
 
function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
};
 
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
