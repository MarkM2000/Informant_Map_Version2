function fitLayout() {
    // set global variables for header, map container, and footer
    const header = document.querySelector("#content");
    const mapContainer = document.querySelector("#map");

    // set map height to fill window
    mapContainer.style.height =
        window.innerHeight - header.offsetHeight + "px";
}

// JavaScript written here
var map = L.map('map', {
    zoomSnap: .1,
    center: [36, -82.5],
    zoom: 4.5
});

// mapbox API parameters
const accessToken = `pk.eyJ1IjoibWFya20wMCIsImEiOiJjbTE4N2o3cjcwdWZzMnFuN2FycGFvYnd5In0.n6pL-Cf02_IYYlVC-SroUg`
const yourName = 'markm00'
const yourMap = 'cm187ejix00lw01pc0smkants'

// request a mapbox raster tile layer and add to map
L.tileLayer(`https://api.mapbox.com/styles/v1/${yourName}/${yourMap}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, and <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

// Omnivore CSV file 
omnivore.csv("csv/LANE LAMSAS LANCS LAGS_informants_corrected_sept_2024.csv")
    .on("ready", function (e) {
        drawMap(e.target.toGeoJSON());
    })
    .on("error", function (e) {
        console.log(e.error[0].message);
    });

var iconjobs = L.icon({
    iconUrl: "svg/job-svgrepo-com.svg",
    iconSize: [10, 10],
    popupAnchor: [0, -22],
    className: "icon"
});

// Start CSV layers
function drawMap(data) {
    const options = {
        pointToLayer: function (feature, ll) {
            return L.marker(ll, {
                icon: iconjobs
            });
        },
        onEachFeature: function (feature, layer) {
            const props = feature.properties

            // assign a string, wrapping the name of the place within two HTML bold tags
            var popup = `<h3>${feature.properties.Informant}</h3> <h3>(${feature.properties.Project})</h3>
    <p>${props.Sex}</p>
    <p>${props.Ethnicity}</p>
    <p>${props.Education_level}</p>
    <p>${props.Occupation}</p>
    <p>${props.Fieldworker}</p> <p>(${props.Year_interviewed})</p> 
`
            layer.bindPopup(popup);
        }
    };

    // create a separate layer from GeoJSON data
    const jobs = L.geoJson(data, options).addTo(map);
} // end drawMap()