//Function that automatically runs on window load
window.onload = function(){
    document.getElementById('contact').addEventListener('submit', send_alert);
}

//Function that sends an alert message when the form is submitted
function send_alert(){
    alert("Thank you for reaching out! Will be in touch soon")
}