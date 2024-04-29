// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners or any other JavaScript code that needs to run after the DOM is fully loaded
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function searchTools() {
    const searchInput = document.getElementById('searchInput').value;
    alert(`Searching for: ${searchInput}`);
    // Implement actual search functionality here
}

