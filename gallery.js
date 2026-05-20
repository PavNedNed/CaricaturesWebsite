function initGallery() {

    const totalImages = 20;
    const imageFolder = "images/gallery/";
    const imageExtension = "jpg";

    const carousel = document.getElementById("carousel");
    const dotsContainer = document.getElementById("dots");

    // Stop if HTML not loaded yet
    if (!carousel || !dotsContainer) {
        console.error("Gallery elements not found");
        return;
    }

    let currentIndex = 0;

    // Clear existing content
    carousel.innerHTML = "";
    dotsContainer.innerHTML = "";

    // Create slides
    for (let i = 1; i <= totalImages; i++) {

        const slide = document.createElement("div");
        slide.className = "slide";

        const img = document.createElement("img");
        img.src = `${imageFolder}${i}.${imageExtension}`;
        img.alt = `Image ${i}`;

        slide.appendChild(img);
        carousel.appendChild(slide);

        // Create dot
        const dot = document.createElement("div");
        dot.className = "dot";

        dot.addEventListener("click", () => {
            goToSlide(i - 1);
        });

        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        carousel.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot =>
            dot.classList.remove("active")
        );

        dots[currentIndex].classList.add("active");
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    };

    window.prevSlide = function () {
        currentIndex =
            (currentIndex - 1 + totalImages) % totalImages;

        updateCarousel();
    };

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    setInterval(window.nextSlide, 4000);

    updateCarousel();
}