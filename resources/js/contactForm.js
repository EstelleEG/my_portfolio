///////////////////////////////////////////////////////////////////////
//CONTACT FORM 
(function () {
    emailjs.init("4riFHalEW_nXH8pM7");
  })();
  
  function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
  
    var contactParams = {
      from_name: fullName,
      from_email: userEmail,
      message: userMessage
    };
  
    emailjs.send('service_vbfmzcj', 'template_zm0k9yn', contactParams).then(function (res) { })
  }
  