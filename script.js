function openPopup(imageId) {
    const popup = document.getElementById('popup');
    const allPopupImages = popup.querySelectorAll('.popup-image');

    popup.style.display = 'flex';

    allPopupImages.forEach(img => {
        img.style.display = 'none';
    });
    
    const popupImage = document.getElementById(imageId);
    if (popupImage) {
        popupImage.style.display = "block";
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


document.getElementById('popup').addEventListener('click', function(event) {
    // adding this so when user clicks outside of letter/popup, closes
    const popupContent = document.querySelector('.popup-content');
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
});
