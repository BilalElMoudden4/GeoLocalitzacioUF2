let meteoritos = [
    { name: 'Meteorito 1', lat: 40.7128, lng: -74.0060 },
    { name: 'Meteorito 2', lat: 34.0522, lng: -118.2437 },
    { name: 'Meteorito 3', lat: 51.5074, lng: -0.1278 }
];

let map = L.map('mapid').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

meteoritos.forEach(function (meteorito) {
    let marker = L.marker([meteorito.lat, meteorito.lng]).addTo(map);
    marker.bindPopup('<b>' + meteorito.name + '</b>').openPopup();
});
