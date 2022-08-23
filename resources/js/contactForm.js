////////////////////////////////////////////////CONTACT FORM 
(function () {
  emailjs.init("4riFHalEW_nXH8pM7");
})();

// check and send confirmation 
function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr, value))
  {
    alert("mail sent !")
    return (true)
  }
     alert("You have entered an invalid email address!")
    return (false)
}

//get the inputs
function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    message: userMessage
  };

//smtpjs
  emailjs
  .send('service_vbfmzcj', 'template_zm0k9yn', contactParams)
  .then(function (res) {alert("Your mail has been sent successfully ! Thank you")});
  ValidateEmail(userEmail);
}































///////////////////////////good 1st version
//   //CONTACT FORM 
// (function () {
//   emailjs.init("4riFHalEW_nXH8pM7");
// })();

// function sendmail() {
//   let fullName = document.getElementById("name").value;
//   let userEmail = document.getElementById("email").value;
//   let userMessage = document.getElementById("message").value;

//   var contactParams = {
//     from_name: fullName,
//     from_email: userEmail,
//     message: userMessage
//   };

//   emailjs.send('service_vbfmzcj', 'template_zm0k9yn', contactParams).then(function (res) { })
// }
