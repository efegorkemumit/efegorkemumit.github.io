let activeLinkId = 'udemy'; // Set the initial active link to 'resume'

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    // Remove the active class from the previous menu link
    if (activeLinkId) {
        const prevActiveLink = document.querySelector(`[onclick="showSection('${activeLinkId}')"]`);
        prevActiveLink.classList.remove('menu-link-active');
    }

    // Add the active class to the clicked menu link
    const clickedLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    clickedLink.classList.add('menu-link-active');

    // Update the active link id
    activeLinkId = sectionId;

    // Add animation using anime.js (for example, fade in)
    anime({
        targets: `#${sectionId}`,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}