document.addEventListener("DOMContentLoaded", function () {
    const catImage = document.getElementById("catImage");
    const button = document.getElementById("newCatButton");

    function fetchCat() {
        fetch("https://cataas.com/cat?json=true")
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // Debugging
                if (data && data._id && catImage) {
                    catImage.src = `https://cataas.com/cat/${data._id}?t=${new Date().getTime()}`;
                    catImage.alt = "Random Cat Image";
                } else {
                    console.error("Invalid API response or missing image element.");
                }
            })
            .catch(error => console.error("API Error:", error));
    }

    if (button) {
        button.addEventListener("click", fetchCat);
    }

    fetchCat(); // Load an image on page load
});
