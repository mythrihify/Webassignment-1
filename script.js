document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");

    const resumeImage = document.getElementById('resume-image');
    resumeImage.addEventListener('click', function() {
        alert('You clicked on the resume image!');
    });

    
    function resizeImage() {
        if (window.innerWidth < 768) {
            resumeImage.style.width = '100%';
        } else {
            resumeImage.style.width = 'auto';
        }
    }

    window.addEventListener('resize', resizeImage);
    resizeImage(); 
});