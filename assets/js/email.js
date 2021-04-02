//this code is from https://www.emailjs.com/docs/tutorial/creating-contact-form/
window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {

        event.preventDefault();

        emailjs.sendForm("gmail", 'sligo_trips', this)
            .then(function() {
                console.log('Thank you for your request!', response.status, response.text);
            }, function(error) {
                console.log('Sorry, something went wrong. Try one more time.', error);
            });
    });

}