document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("profilePicture") as HTMLInputElement | null;
    const previewImage = document.getElementById("previewImage") as HTMLImageElement | null;

    if (!fileInput || !previewImage) {
        console.error("Profile picture input or preview image element is missing.");
        return;
    }

    fileInput.addEventListener("change", (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files || target.files.length === 0) {
            previewImage.style.display = "none"; // Hide if no file selected
            return;
        }

        const file = target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target) {
                previewImage.src = e.target.result as string;
                previewImage.style.display = "block"; // Show the image
            }
        };

        reader.readAsDataURL(file);
    });
});
