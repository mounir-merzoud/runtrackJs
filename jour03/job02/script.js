$(document).ready(function() {
    // Enable draggable and sortable functionality
    $("#imageContainer").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#imageContainer").disableSelection();

    // Check order of images
    $('#checkOrderButton').click(function() {
        var correctOrder = true;
        $('#imageContainer img').each(function(index) {
            if (this.src.indexOf('arc' + (index + 1) + '.png') === -1) {
                correctOrder = false;
            }
        });
        if (correctOrder) {
            $('#winMessage').show();
            $('#loseMessage').hide();
        } else {
            $('#loseMessage').show();
            $('#winMessage').hide();
        }
    });
});
