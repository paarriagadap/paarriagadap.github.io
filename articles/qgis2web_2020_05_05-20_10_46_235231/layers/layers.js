var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
                                })
        });
var lyr_LAEI2016_2016_NO2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "LAEI2016_2016_NO2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LAEI2016_2016_NO2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-60908.140024, 6665127.168106, 38182.535560, 6749731.683991]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_LAEI2016_2016_NO2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LAEI2016_2016_NO2_1];
