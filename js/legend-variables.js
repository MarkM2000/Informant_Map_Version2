// Adding variables for checkboxes    
/// Add gender variables
var gender = L.geoJson(gender, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(layer.feature.properties.Sex);

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
}).addTo(map);

var female = L.geoJson(female, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#ffa9d0',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'purple'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
}).addTo(map);

var male = L.geoJson(male, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#2986cc',
            weight: 1,
            fillColor: '#2986cc',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'blue'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#2986cc'
            });
        });
    }
}).addTo(map);

var unknown = L.geoJson(unknown, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#5a7485',
            weight: 1,
            fillColor: '#240436',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.Sex}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'brown'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#240436'
            });
        });
    }
}).addTo(map);

/// Add ethnicity variables
var ethnicity = L.geoJson(ethnicity, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#FFFFFF',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(layer.feature.properties.Ethnicity);

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'gray'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#cccccc'
            });
        });
    }
}).addTo(map);

var white = L.geoJson(white, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#000000',
            weight: 1,
            fillColor: '#ffe39f',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Ethnicity: ${props.Ethnicity}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffe39f'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffe39f'
            });
        });
    }
}).addTo(map);

var black = L.geoJson(black, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: 'white',
            weight: 1,
            fillColor: 'black',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Ethnicity: ${props.Ethnicity}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'black'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'black'
            });
        });
    }
}).addTo(map);

/// Add education variable
var education = L.geoJson(education, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#1c375b',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Education: ${props.Education_level}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'gray'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#1c375b'
            });
        });
    }
}).addTo(map);

var occupation = L.geoJson(occupation, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#000000',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Occupation: ${props.Occupation}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: 'black'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000000'
            });
        });
    }
}).addTo(map);