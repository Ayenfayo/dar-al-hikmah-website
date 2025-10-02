document.addEventListener('DOMContentLoaded', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      document.getElementById('location').textContent = 
        `Your location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}`;
    });
  } else {
    document.getElementById('location').textContent = "Location not supported.";
  }
});