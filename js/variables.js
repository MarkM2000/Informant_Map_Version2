// Adding variables for checkboxes   
/// Add project variable
var projects = L.geoJson(projects, {
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
})

var LAGS = L.geoJson(LAGS, {
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
})

var LAMSAS = L.geoJson(LAMSAS, {
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
})

var LANCS = L.geoJson(LANCS, {
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
})

var LANE = L.geoJson(LANE, {
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
})

/// Add gender variables
var gender = L.geoJson(gender, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#6e2032',
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
                fillColor: '#6e2032'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#6e2032'
            });
        });
    }
})

var female = L.geoJson(female, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
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
})

var male = L.geoJson(male, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
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
})

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
})

/// Add ethnicity variables
var ethnicity = L.geoJson(ethnicity, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#00FF00',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(layer.feature.properties.Ethnicity);

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#00FF00'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#00FF00'
            });
        });
    }
})

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
})

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
})

/// Add variable for age
var age = L.geoJson(age, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#83b9ab',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Age: ${props.Age}<br>
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
                fillColor: '#83b9ab'
            });
        });
    }
})

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
})

/// Add variable for occupation
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
})

var clerical = L.geoJson(clerical, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#001122',
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
                fillColor: '#001122'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#001122'
            });
        });
    }
})

var craftsman = L.geoJson(craftsman, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#EE293D',
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
                fillColor: '#EE293D'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#EE293D'
            });
        });
    }
})

var farmer = L.geoJson(farmer, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#284409',
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
                fillColor: '#284409'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#284409'
            });
        });
    }
})

var fisher = L.geoJson(fisher, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#FA8072',
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
                fillColor: '#FA8072'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FA8072'
            });
        });
    }
})

var household = L.geoJson(household, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#FA8072',
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
                fillColor: '#FA8072'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FA8072'
            });
        });
    }
})

var keeping_house = L.geoJson(keeping_house, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#FA8072',
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
                fillColor: '#FA8072'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FA8072'
            });
        });
    }
})

var laborer = L.geoJson(laborer, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#fc6600',
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
                fillColor: '#fc6600'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#fc6600'
            });
        });
    }
})

var mop = L.geoJson(mop, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#FA8072',
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
                fillColor: '#FA8072'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FA8072'
            });
        });
    }
})