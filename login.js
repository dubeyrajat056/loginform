  document.querySelector(".forgot-password-link").addEventListener("click", function(event) {
    event.preventDefault();
    // Add your forgot password logic here (e.g., show a modal or redirect to a forgot password page)
    alert("Forgot Password functionality not implemented yet!");
  });

  // Background Image Slider
  const slides = document.querySelectorAll('.background-slider img');
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds