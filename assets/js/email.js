//this code is from https://www.emailjs.com/docs/tutorial/creating-contact-form/

/*    window.onload = function() {
        document.getElementById('send_message').addEventListener('submit', function(event) {
                event.preventDefault();*/

                
        function sendMail(send_message){

            emailjs.send("service_icxm4p6","template_sx7dhvo",{
                from_name: send_message.name.value,
                trip_request: send_message.trip_request.value,
                emailaddress: send_message.emailaddress.value,
                })

                .then(
                
                function(response) {
                console.log('Thank you for your message!', response);
                }, 
            
                function(error) {
                console.log('Sorry, something went wrong. Try one more time.', error);
                }
            );

            return false;
            }
        /*})
    }*/