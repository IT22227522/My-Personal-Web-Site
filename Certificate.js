// script.js

// Function to open the popup
function openPopup(imageSrc) {
  const popupOverlay = document.getElementById('popup-overlay');
  const popupImage = document.getElementById('popup-image');
  
  popupImage.src = imageSrc; // Set the image source
  popupOverlay.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.style.display = 'none'; // Hide the popup
}