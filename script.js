// Script to handle navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav buttons and sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    const sectionLinks = document.querySelectorAll('.section-link');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Function to set active section
    function setActiveSection(sectionId) {
        // Remove active class from all sections and nav buttons
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to selected section and corresponding nav button
        document.getElementById(sectionId).classList.add('active');
        document.querySelector(`.nav-btn[data-section="${sectionId}"]`).classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Event listeners for nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            setActiveSection(sectionId);
        });
    });
    
    // Event listeners for section links (like View My Work button)
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            setActiveSection(sectionId);
        });
    });
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});