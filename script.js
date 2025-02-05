document.addEventListener("DOMContentLoaded", function () {
    var fileInput = document.getElementById("profilePicture");
    var previewImage = document.getElementById("previewImage");
    if (!fileInput || !previewImage) {
        console.error("Profile picture input or preview image element is missing.");
        return;
    }
    fileInput.addEventListener("change", function (event) {
        var target = event.target;
        if (!target.files || target.files.length === 0) {
            previewImage.style.display = "none"; // Hide if no file selected
            return;
        }
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                previewImage.src = e.target.result;
                previewImage.style.display = "block"; // Show the image
            }
        };
        reader.readAsDataURL(file);
    });
});
