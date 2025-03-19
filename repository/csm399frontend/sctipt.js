// Initialize Leaflet Map
var map = L.map('map').setView([37.7749, -122.4194], 5);  // Default to San Francisco

// Add OpenStreetMap Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example Marker for a Disaster Area
L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('Example Disaster Location')
    .openPopup();

    document.addEventListener("DOMContentLoaded", function () {
        // Handle Navigation
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    
        // Handle Tab Switching (Optional for future updates)
        const buttons = document.querySelectorAll(".inventory-tabs button");
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                document.querySelector(".inventory-tabs .active").classList.remove("active");
                this.classList.add("active");
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Handle Navigation Highlight
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    
        // Handle Donation Submission
        document.querySelector(".donation-form").addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your donation!");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("JavaScript Loaded Successfully!");
    
        // Handle donation form submission
        const donationForm = document.getElementById("donation-form");
        if (donationForm) {
            donationForm.addEventListener("submit", function (event) {
                event.preventDefault();
                alert("Thank you for your donation!");
                donationForm.reset();
            });
        }
    
        // Navigation Links (Optional)
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                console.log("Navigating to:", link.href);
            });
        });
    });
    