document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.card, .large-card');

    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            element.style.backgroundColor = '#000';
            element.style.color = '#fff';
            element.style.borderColor = '#fff';
        });

        element.addEventListener('mouseleave', function() {
            element.style.backgroundColor = '#fff';
            element.style.color = '#000';
            element.style.borderColor = '#000';
        });
    });

    const resumeButton = document.getElementById('cs1-button');
    resumeButton.addEventListener('click', function(popover) {
        window.location.href = 'https://docs.google.com/presentation/d/13u4gOYFfTUCKl9f4RRL7YUHrMnouaf56eaTrt09gK4Y/edit?usp=sharing';
    });
});
