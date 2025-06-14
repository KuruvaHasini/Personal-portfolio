document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    // Add Scroll Animation
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Initial Animation Properties
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease-out";
    });
});
