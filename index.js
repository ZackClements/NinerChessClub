$(document).ready(function (){
    // Jquery UI Dialog widget found here: https://jqueryui.com/dialog/
    $('#dialog').dialog({
        draggable: true,
        classes: {
            "ui-dialog": "dialog-main",
            "ui-dialog-titlebar": "dialog-titlebar",
            "ui-dialog-titlebar-close": "dialog-close"
        }
    });
});