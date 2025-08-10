const CORRECT_NAME = "Mariyam"; // Change this to your girlfriend's name

const nameScreen = document.getElementById("nameScreen");
const surpriseScreen = document.getElementById("surpriseScreen");
const nameInput = document.getElementById("nameInput");
const openBtn = document.getElementById("openSurpriseBtn");
const userNameSpan = document.getElementById("userName");
const slideImage = document.getElementById("slideImage");

let currentPhoto = 1;
const totalPhotos = 10; // photos named photo1.jpg ... photo10.jpg in /images/

openBtn.addEventListener("click", () => {
  const enteredName = nameInput.value.trim();
  if (enteredName.toLowerCase() === CORRECT_NAME.toLowerCase()) {
    startSurprise(enteredName);
  } else {
    alert("Oops! That's not the right name 💔");
  }
});

// Also allow Enter key to submit name
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    openBtn.click();
  }
});

function startSurprise(name) {
  // Hide name entry screen
  nameScreen.classList.add("hidden");

  // Show surprise screen
  surpriseScreen.classList.remove("hidden");

  // Show the entered name
  userNameSpan.textContent = name;

  // Start photo slideshow
  startSlideshow();

  // Unmute and play the YouTube Shorts background video after user interaction
  const bgVideo = document.getElementById("bgVideo");
  bgVideo.contentWindow.postMessage(
    '{"event":"command","func":"unMute","args":""}',
    "*"
  );
  bgVideo.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
}

function startSlideshow() {
  setInterval(() => {
    currentPhoto++;
    if (currentPhoto > totalPhotos) currentPhoto = 1;
    slideImage.src = `images/photo${currentPhoto}.jpg`;
  }, 3000);
}
