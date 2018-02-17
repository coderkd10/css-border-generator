$('.imageupload').imageupload();

function showError(msg) {
    var errorArea = $("#error-area");
    errorArea.html('');
    errorArea.append($('<div class="alert alert-danger alert-dismissable fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + msg +'</div>'));
}

$("form").on('submit', function(e) {
    e.preventDefault();
    showError("Please upload an image.");
});
