const correctName = "Mariyam"; // change to your girlfriend's name

function checkName() {
    let name = document.getElementById("nameInput").value.trim();
    if (name.toLowerCase() === correctName.toLowerCase()) {
        document.getElementById("nameScreen").classList.add("hidden");
        document.getElementById("surpriseScreen").classList.remove("hidden");
        document.getElementById("userName").innerText = name;
        startSlideshow();
    } else {
        alert("Oops! That's not the right name 💔");
    }
}

// Slideshow Logic
let currentSlide = 1;
const totalSlides = 10; // total photos
function startSlideshow() {
    setInterval(() => {
        currentSlide++;
        if (currentSlide > totalSlides) currentSlide = 1;
        document.getElementById("slideImage").src = `images/${currentSlide}.jpg`;
    }, 3000);
}
