window.loadGoogleMaps = (apiKey) => {
    return new Promise((resolve, reject) => {
        // If already loaded, resolve immediately
        if (window.google && window.google.maps) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://googleapis.com{apiKey}`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => resolve(); // Resolved when the file is finished downloading
        script.onerror = (err) => (event) => {
            console.error("Google Maps Script Load Error:", event);
            reject("Google Maps script failed to load. Check your API key and network.");
        };

        document.head.appendChild(script);
    });
};

window.initMap = () => {
    // This will now only run AFTER the script is confirmed loaded
    new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
};
