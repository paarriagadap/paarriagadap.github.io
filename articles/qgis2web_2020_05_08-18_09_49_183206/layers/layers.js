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
var lyr_aa9_no2300m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "aa9_no2300m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/aa9_no2300m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8266414.622137, 4938144.552791, -8204190.395188, 5000072.872340]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_aa9_no2300m_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aa9_no2300m_1];
