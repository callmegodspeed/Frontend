function initializeMap() {
    const map = L.map('map').setView([12.0, 8.0], 6); // Centered on the region

    // Add OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Define colors for each layer
    const layerColors = {
        flood: '#3498db', // Blue for flood
        bushfires: '#e74c3c', // Red for bushfires
        aiFloodDetection: '#2ecc71', // Green for AI flood detection
        temperature: '#f1c40f', // Yellow for temperature
        wind: '#9b59b6', // Purple for wind
    };

    // Function to generate random GeoJSON data for a layer
    function generateRandomGeoJSON(numFeatures, bounds) {
        const features = [];
        for (let i = 0; i < numFeatures; i++) {
            const lat = bounds.south + Math.random() * (bounds.north - bounds.south);
            const lng = bounds.west + Math.random() * (bounds.east - bounds.west);
            features.push({
                type: 'Feature',
                properties: { name: `Random Location ${i + 1}` },
                geometry: {
                    type: 'Point',
                    coordinates: [lng, lat],
                },
            });
        }
        return {
            type: 'FeatureCollection',
            features,
        };
    }

    // Define bounds for random locations (adjust as needed)
    const bounds = {
        north: 14.0,
        south: 10.0,
        east: 10.0,
        west: 6.0,
    };

    // Generate unique GeoJSON data for each layer
    const floodData = generateRandomGeoJSON(5, bounds); // 5 random flood locations
    const bushfireData = generateRandomGeoJSON(5, bounds); // 5 random bushfire locations
    const aiFloodData = generateRandomGeoJSON(5, bounds); // 5 random AI flood detection locations
    const temperatureData = generateRandomGeoJSON(5, bounds); // 5 random temperature locations
    const windData = generateRandomGeoJSON(5, bounds); // 5 random wind locations

    // Function to style layers
    function styleLayer(feature, color) {
        return {
            fillColor: color,
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.6,
        };
    }

    // Add layers to the map
    const floodLayer = L.geoJSON(floodData, {
        pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: layerColors.flood,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            });
        },
    }).addTo(map);

    const bushfireLayer = L.geoJSON(bushfireData, {
        pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: layerColors.bushfires,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            });
        },
    }).addTo(map);

    const aiFloodLayer = L.geoJSON(aiFloodData, {
        pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: layerColors.aiFloodDetection,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            });
        },
    });

    const temperatureLayer = L.geoJSON(temperatureData, {
        pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: layerColors.temperature,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            });
        },
    });

    const windLayer = L.geoJSON(windData, {
        pointToLayer: (feature, latlng) => {
            return L.circleMarker(latlng, {
                radius: 8,
                fillColor: layerColors.wind,
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            });
        },
    });

    // Add layer control to toggle layers
    const baseLayers = {
        'Flood': floodLayer,
        'Bushfires': bushfireLayer,
    };

    const overlayLayers = {
        'AI Flood Detection': aiFloodLayer,
        'Temperature': temperatureLayer,
        'Wind': windLayer,
    };

    L.control.layers(baseLayers, overlayLayers).addTo(map);
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', initializeMap);   // Hero Image Slider
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    function showNextImage() {
        // Hide the current image
        heroImages[currentImageIndex].classList.remove('active');

        // Move to the next image
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;

        // Show the next image
        heroImages[currentImageIndex].classList.add('active');
    }

    // Change image every 5 seconds
    setInterval(showNextImage, 5000);

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

// Function to update the "Last updated" time
function updateTime() {
    const updateTimes = document.querySelectorAll('.update-time');
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    updateTimes.forEach(updateTime => {
        updateTime.textContent = `Last updated: ${formattedTime}`;
    });
}

// Function to simulate real-time updates for disaster cards
function updateDisasterCards() {
    const disasterCards = document.querySelectorAll('.disaster-card');

    disasterCards.forEach(card => {
        const disasterType = card.classList[1]; // Get the disaster type (flood, fire, earthquake)
        const content = card.querySelector('.disaster-content ul');

        // Simulate new data based on disaster type
        const newData = getSimulatedData(disasterType);

        // Clear existing content
        content.innerHTML = '';

        // Add new data to the card
        newData.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.location}</strong> - Severity: ${item.severity}`;
            content.appendChild(li);
        });
    });
}

// Function to generate simulated data
function getSimulatedData(disasterType) {
    const data = {
        flood: [
            { location: 'Accra, Ghana', severity: 'High' },
            { location: 'Kumasi, Ghana', severity: 'Medium' },
        ],
        fire: [
            { location: 'Tamale, Ghana', severity: 'High' },
            { location: 'Cape Coast, Ghana', severity: 'Medium' },
        ],
        earthquake: [
            { location: 'Takoradi, Ghana', severity: 'Low' },
            { location: 'Ho, Ghana', severity: 'Medium' },
        ],
    };

    return data[disasterType] || [];
}

// Function to add hover effects to cards
function addHoverEffects() {
    const disasterCards = document.querySelectorAll('.disaster-card');

    disasterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Function to initialize the section
function initDisasterSection() {
    // Update time and content every 5 minutes (300,000 milliseconds)
    setInterval(() => {
        updateTime();
        updateDisasterCards();
    }, 300000);

    // Add hover effects
    addHoverEffects();

    // Initial update
    updateTime();
    updateDisasterCards();
}

// Initialize the disaster section when the page loads
document.addEventListener('DOMContentLoaded', initDisasterSection);

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