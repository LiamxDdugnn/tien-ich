document.getElementById("uploadInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append("image", file);

        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID abcd1234"
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const imageUrl = data.data.link;
                document.getElementById("imagePreview").innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
                document.getElementById("imageLink").value = imageUrl;
            } else {
                Swal.fire("Lỗi", "Không thể tải ảnh lên!", "error");
            }
        })
        .catch(() => Swal.fire("Lỗi", "Lỗi kết nối đến Imgur!", "error"));
    }
});

document.getElementById("copyButton").addEventListener("click", function() {
    const imageUrl = document.getElementById("imageLink");
    imageUrl.select();
    document.execCommand("copy");
    Swal.fire("Đã sao chép!", "Link ảnh đã được sao chép vào clipboard.", "success");
});
