document.getElementById("uploadInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("image").value = e.target.result;
            document.getElementById("imagePreview").innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
            document.getElementById("copyButton").style.display = "inline-block";
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("copyButton").addEventListener("click", function() {
    const imageUrl = document.getElementById("image");
    imageUrl.select();
    document.execCommand("copy");
    Swal.fire("Đã sao chép!", "Link ảnh đã được sao chép vào clipboard.", "success");
});
