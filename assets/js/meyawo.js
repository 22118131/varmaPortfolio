/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function confirmDownload() {
    const userConfirmed = confirm("Do you want to download the CV?");
    if (userConfirmed) {
      // If user clicks "OK", trigger download
      const link = document.createElement('a');
      link.href = 'assets/PCVarmaResume.pdf';
      link.download = 'PCVarmaResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If user clicks "Cancel", do nothing or show a message
      alert("Download canceled.");
    }
  };

    // After form submit show success alert
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // stop normal form submit for a second
    
        // Show the alert
        alert('✅ Your message has been sent successfully!');
    
        // Now submit the form
        this.submit();
      });

      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default submit
        
        const formData = new FormData(this);
    
        fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            alert('✅ Your message has been sent successfully!');
            this.reset(); // Reset the form
          } else {
            alert('❌ Failed to send message. Please try again.');
          }
        })
        .catch(error => {
          alert('❌ Something went wrong.');
        });
      });