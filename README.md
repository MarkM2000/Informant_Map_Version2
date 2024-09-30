# Informant_Map_Version2
This repository will be Version 2 of the Informant Map.

## How This Map Was Created
This is the variable for informant, which looks something like this:
```
    // Adding variables for checkboxes
    var informant = L.geoJson(informant, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                color: '#1f78b4',
                weight: 1,
                fillColor: '#B31942',
                fillOpacity: .8,
                radius: 10
            });
        },
        onEachFeature: function (feature, layer) {
            const props = feature.properties
            const popup = `
					<b>${props.Informant}</b>
					<br>Project: ${props.Project}<br>
				`
            layer.bindTooltip(popup, {
                className: 'tool-informant'
            });

            layer.on('mouseover', function () {
                // code goes in here
                layer.setStyle({
                    fillColor: 'red'
                });
            });
            layer.on('mouseout', function () {
                // code goes in here
                layer.setStyle({
                    fillColor: '#B31942'
                });
            });
        },
    }).addTo(map);
```

To add a checkmark that includes both the `informant` and `project` for the props, add this:
``` 
        onEachFeature: function (feature, layer) {
            const props = feature.properties
            const popup = `
					<b>${props.Informant}</b>
					<br>Project: ${props.Project}<br>
				`
            layer.bindTooltip(popup, {
                className: 'tool-informant'
            });

            layer.on('mouseover', function () {
                // code goes in here
                layer.setStyle({
                    fillColor: 'red'
                });
            });
            layer.on('mouseout', function () {
                // code goes in here
                layer.setStyle({
                    fillColor: '#B31942'
                });
            });
        },
```

I did the same thing for the `fieldworker` variable. The props include `Fieldworker` and `Year_interviewed`.