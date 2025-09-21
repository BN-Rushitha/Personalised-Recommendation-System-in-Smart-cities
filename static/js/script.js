// ---------------------------
// Page Navigation
// ---------------------------
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    } else {
        console.error(`Page with id "${pageId}" not found.`);
    }
}

// ---------------------------
// Geolocation
// ---------------------------
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Latitude:", position.coords.latitude);
                console.log("Longitude:", position.coords.longitude);
                document.getElementById("locationOutput").textContent =
                    `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;

                // Example: Call API with location
                fetchNearbyPlaces(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert("Unable to retrieve your location.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// ---------------------------
// API Request (Example Proxy)
// ---------------------------
// IMPORTANT: Direct API calls to Yelp or Google Places will fail due to CORS.
// We use a PHP file as a proxy on XAMPP to make the request server-side.
function fetchNearbyPlaces(lat, lon) {
    fetch(`proxy.php?lat=${lat}&lon=${lon}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log("Nearby places:", data);
            document.getElementById("results").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("API fetch error:", error);
            alert("Failed to fetch nearby places.");
        });
}
