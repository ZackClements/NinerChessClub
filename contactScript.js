//Function that automatically runs on window load
window.onload = function(){
    $('#contact').submit(function(e) {
        e.preventDefault();
        // Jquery form plugin found here: https://plugins.jquery.com/form/
        $(this).ajaxSubmit({ //Uses jQuery Form Plugin to submit ajax request
            clearForm: true,
            success: function() {
                window.alert('Will be in touch shortly!');
            }
        });
    });
}


