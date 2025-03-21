// Initialize Leaflet Map
function initializeMap() {
    const map = L.map('map').setView([37.7749, -122.4194], 5); // Default to San Francisco

    // Add OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example Marker for a Disaster Area
    L.marker([37.7749, -122.4194]).addTo(map)
        .bindPopup('Example Disaster Location')
        .openPopup();
}

// Testimonial Slider
function initializeTestimonialSlider() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function slideTestimonials() {
        index++;
        if (index >= testimonials.length) {
            index = 0;
        }
        const offset = -index * 100;
        testimonialContainer.style.transform = `translateX(${offset}%)`;
    }

    // Auto-slide every 4 seconds
    setInterval(slideTestimonials, 4000);
    
}

// Testimonial Slider with Dots Navigation
function initializeTestimonialSlider() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    let index = 0;

    // Create dots dynamically based on the number of testimonials
    if (dotsContainer) {
        testimonials.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                index = i;
                updateSlider();
                updateDots();
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Function to update the slider position
    function updateSlider() {
        const offset = -index * 100;
        testimonialContainer.style.transform = `translateX(${offset}%)`;
    }

    // Function to update the active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        updateSlider();
        updateDots();
    }, 5000);
}

    // Initialize Testimonial Slider
    if (document.querySelector('.testimonial-container')) {
        initializeTestimonialSlider();
    }

    // Initialize Mini-Map
    function initializeMiniMap() {
        const miniMap = L.map('mini-map').setView([37.7749, -122.4194], 5); // Default to San Francisco

        // Add OpenStreetMap Tile Layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(miniMap);

        // Example Marker for a Disaster Area
        L.marker([37.7749, -122.4194]).addTo(miniMap)
            .bindPopup('Example Disaster Location')
            .openPopup();
    }

    // Initialize Mini-Map if the element exists
    if (document.getElementById('mini-map')) {
        initializeMiniMap();
    }
        
    // Handle Navigation Highlight
    function highlightActiveNavLink() {
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    }

    // Handle Donation Form Submission
    function handleDonationFormSubmission() {
        const donationForm = document.querySelector(".donation-form");
        if (donationForm) {
            donationForm.addEventListener("submit", function (event) {
                event.preventDefault();
                alert("Thank you for your donation!");
                donationForm.reset();
            });
        }
    }

    // Handle Inventory Tab Switching
    function handleInventoryTabs() {
        const buttons = document.querySelectorAll(".inventory-tabs button");
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                document.querySelector(".inventory-tabs .active").classList.remove("active");
                this.classList.add("active");
            });
        });
    }

    // Main Initialization Function
    document.addEventListener("DOMContentLoaded", function () {
        console.log("JavaScript Loaded Successfully!");

    // Initialize Map
    if (document.getElementById('map')) {
        initializeMap();
    }

    // Initialize Testimonial Slider
    if (document.querySelector('.testimonial-container')) {
        initializeTestimonialSlider();
    }

    // Highlight Active Navigation Link
    highlightActiveNavLink();

    // Handle Donation Form Submission
    handleDonationFormSubmission();

    // Handle Inventory Tab Switching
    if (document.querySelector('.inventory-tabs')) {
        handleInventoryTabs();
    }
});