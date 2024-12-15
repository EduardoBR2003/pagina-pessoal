document.addEventListener('DOMContentLoaded', () => {
    
    // Ao passar o mouse em cima de cada div
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.02)';
            section.style.transition = 'transform 0.3s ease';
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });
});