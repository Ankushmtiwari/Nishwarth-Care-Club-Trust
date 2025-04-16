const form = document.querySelector('form');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');

// Add click event listener to toggle menu visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide nav links
});


form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'thankyou.html';
            } else {
                alert('Something went wrong. Please try again!');
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Form submission failed. Please try again.');
        });
});