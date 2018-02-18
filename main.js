$('.imageupload').imageupload();

function showError(msg) {
    var errorArea = $("#error-area");
    errorArea.html('');
    errorArea.append($('<div class="alert alert-danger alert-dismissable fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + msg +'</div>'));
}

function generateBorderImage(canvas, image, width, height) {
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i !== 1 || j !== 1)
                ctx.drawImage(image, i*width, j*height, width, height);
        }
    }
}

function generateDonwloadBtn(canvas) {
    var url = canvas.toDataURL();
    var a = $('<a download="border.png"><button type="submit" class="btn btn-primary center-block">Download</button></a>');
    a.attr("href", url);
    $("#gen-area a").remove();
    $("#gen-area").append(a);
}

$("form").on('submit', function(e) {
    e.preventDefault();
    $("#error-area").html(''); //clear previous error

    var img = $("img")[0];
    if (!img) {
        showError("Please upload an image.");
        return;
    }

    var width = parseInt($("#new-width").val());
    var height = parseInt($("#new-height").val());
    if (isNaN(width) || isNaN(height)) {
        showError("Enter a valid number in width and height.");
        return;
    }

    var canvas = $("canvas")[0];
    canvas.width = 3*width;
    canvas.height = 3*height;

    generateBorderImage(canvas, img, width, height);
    generateDonwloadBtn(canvas);

    $("#gen-area").css("display", "block");
});
