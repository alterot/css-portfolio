"use strict";
var currentIndex = 0;
document.addEventListener('DOMContentLoaded', function () {
    var portfolioImage = document.querySelector('.portfolio-gallery');
    var images = Array.from((portfolioImage === null || portfolioImage === void 0 ? void 0 : portfolioImage.children) || []).map(function (element) { return element; });
    var leftArrow = document.querySelector('.portfolio__arrow--left');
    var rightArrow = document.querySelector('.portfolio__arrow--right');
    function scrollPortfolio(direction) {
        if (direction === 'left' && currentIndex > 0) {
            currentIndex--;
        }
        else if (direction === 'right' && currentIndex < images.length - 1) {
            currentIndex++;
        }
        portfolioImage === null || portfolioImage === void 0 ? void 0 : portfolioImage.scroll({
            left: images[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
    leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener('click', function () {
        scrollPortfolio('left');
    });
    rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener('click', function () {
        scrollPortfolio('right');
    });
    var text1 = document.querySelector('#text1');
    if (text1) {
        text1.style.display = 'block';
    }
});
var portfolioGallery = document.querySelector('.portfolio-gallery');
portfolioGallery === null || portfolioGallery === void 0 ? void 0 : portfolioGallery.addEventListener('scroll', function () {
    var textElements = document.querySelectorAll('.portfolio-gallery__item--text');
    textElements.forEach(function (text) {
        text.style.display = 'none';
    });
    var currentText = document.querySelector('#text' + (currentIndex + 1));
    if (currentText) {
        currentText.style.display = 'block';
    }
});
