let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showSlide, 3000); 
showSlide(); 