// Creating map object
var myMap = L.map("map", {
    center: [51.48214652388289, -0.12840270996093753],
    zoom: 10
});

var asthmaGeojson;
var medianIcome;
var baseLayers;
var overlays;

// Adding tile layer

var layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
   attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
   subdomains: 'abcd',
   maxZoom: 20,
   minZoom: 0
 });

 layer.addTo(myMap);

 baseLayers ={
    'Carto Dark':layer
 };

// Load in geojson data
var asthmaData = "/data/london_data.geojson";

fetch(asthmaData)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
        createChoropleth(data);
    });

// choropleth scales
var colorAsthama = ['#ffc6c4','#f4a3a8','#e38191','#cc607d','#ad466c'];
var colorIcome = ['#d3f2a3', '#97e196', '#6cc08b', '#4c9b82', '#217a79'];
var asthmaLimits;
var incomeLimits;

function createChoropleth(data){
    // Create a new choropleth layer
    asthmaGeojson = L.choropleth(data, {

        // Define what  property in the features to use
        valueProperty: "Asthma",

        // Set color scale
        scale: colorAsthama,

        // Number of breaks in step range
        steps: 5,

        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
            // Border color
            color: "#343434",
            weight: 0.8,
            fillOpacity: 0.9
        },

        // Binding a pop-up to each layer
        onEachFeature: function (feature, layer) {
            let popContent = "<div class='popup-content'>"+
                    "<h4 class='header' id='header'> " + feature.properties.name+ "<h4>"+
                    "<p> Asthma ER Admissions, 2015<strong>"+feature.properties.Asthma+"</strong> </p>"+
                    "<p>Mean Income (£), 2015<strong>"+feature.properties.Mean_Incom+"</strong> </p>"+
                    "</div>";

            layer.bindPopup(popContent);
        }

    }).addTo(myMap);

    console.log(asthmaGeojson);
    asthmaLimits = asthmaGeojson.options.limits;

     medianIcome = L.choropleth(data, {

        // Define what  property in the features to use
        valueProperty: "Mean_Incom",

        // Set color scale
        scale: colorIcome,

        // Number of breaks in step range
        steps: 5,

        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
            // Border color
            color: "#343434",
            weight: 0.8,
            fillOpacity: 0.9
        },

        // Binding a pop-up to each layer
        onEachFeature: function (feature, layer) {
            let popContent = "<div class='popup-content'>"+
                    "<h4 class='header' id='header'>" + feature.properties.name+ "<h4>"+
                    "<p> Asthma ER Admissions, 2015<strong>"+feature.properties.Asthma+"</strong> </p>"+
                    "<p>Mean Income (£), 2015<strong>"+feature.properties.Mean_Incom+"</strong> </p>"+
                    "</div>";

            layer.bindPopup(popContent);
        }
    }).addTo(myMap);

    incomeLimits = medianIcome.options.limits;

    overlays = {
        'Asthma':asthmaGeojson,
        'Median Income':medianIcome
    }

    L.control.layers(overlays,{},{
        collapsed:false
    }).addTo(myMap);
     

    createLegends();
}

// Create the legend
var legendIncome = document.getElementById('legend-income');
var legendAsthma = document.getElementById('legend-asthma');
var asthmaText = document.getElementById('text-asthma');
var icomeText = document.getElementById('text-income');

function createLegends(){
    var docFrag = document.createDocumentFragment();
    colorIcome.forEach(function(color,i){
        let item  = document.createElement('div');
        item.style.backgroundColor = color;
        item.classList.add('item');

        let text = document.createElement('div');

        text.innerHTML = (incomeLimits[i-1]||0) +" - "+incomeLimits[i];
        icomeText.appendChild(text);


        docFrag.appendChild(item);

    });

    legendIncome.appendChild(docFrag);

    var docFrag = document.createDocumentFragment();
    colorAsthama.forEach(function(color,i){
        let item  = document.createElement('div');
        item.style.backgroundColor = color;
        item.classList.add('item');

        let text = document.createElement('div');
        text.innerHTML = (asthmaLimits[i-1]||0) +" - "+ asthmaLimits[i];
        asthmaText.appendChild(text);

        docFrag.appendChild(item);

    });

    legendAsthma.append(docFrag);
}

