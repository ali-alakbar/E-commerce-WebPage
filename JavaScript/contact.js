// ============= Start Map Section =============

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpYWxha2JhciIsImEiOiJja3g1dzdhOWMyOTFmMnFvYnF3bHBqcHNiIn0.9ThCadzARupcfkr73d-71A";

navigator.geolocation.getCurrentPosition(
  // Getting Currect Location Successfully
  () => {
    // Bangalore, India Coordinates
    settingMap(["77.5946", "12.9716"]);
  }
);

function settingMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 10,
  });
}

// ============= End Map Section =============
