ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([180757.878773, 2704491.788578, 181842.467477, 2705367.236630]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13171027.333389, 2807763.520792, 13172139.077906, 2808693.362874]
                            })
                        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr_building_2];
lyr_building_2.set('fieldAliases', {'Type': 'Type', '樓高': '樓高', });
lyr_building_2.set('fieldImages', {'Type': 'TextEdit', '樓高': 'TextEdit', });
lyr_building_2.set('fieldLabels', {'Type': 'header label', '樓高': 'header label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});