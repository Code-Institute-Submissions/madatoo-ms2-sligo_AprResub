function sendMail(contactForm) {
    emailjs.send("gmail", "sligo_trips", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "trip_request": contactForm.trip_request.value
})
    .then(function(response) {
       console.log('Thank you for your request!', response.status, response.text);
    }, function(error) {
       console.log('Sorry,try one more time', error);
    });
    return false;

}
