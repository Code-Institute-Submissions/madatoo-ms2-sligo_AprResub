//this code is from https://www.emailjs.com/docs/tutorial/creating-contact-form/

/*   window.onload = function() {
        document.getElementById('send_message').addEventListener('submit', function(event) {
                event.preventDefault();*/

                
        function sendMail(send_message){
            
            emailjs.send("service_icxm4p6", "sligo_trips", {
                "from_name":send_message.name.value,
                "emailaddress": send_message.emailaddress.value,
                "trip_request": send_message.trip_request.value
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
        /*})}*/