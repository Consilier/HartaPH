var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tempuri_poly_1 = new ol.format.GeoJSON();
var features_tempuri_poly_1 = format_tempuri_poly_1.readFeatures(json_tempuri_poly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempuri_poly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempuri_poly_1.addFeatures(features_tempuri_poly_1);
var lyr_tempuri_poly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempuri_poly_1, 
                style: style_tempuri_poly_1,
                popuplayertitle: "tempuri_poly",
                interactive: true,
                title: '<img src="styles/legend/tempuri_poly_1.png" /> tempuri_poly'
            });
var format_pentrusuprapunereterasa_2 = new ol.format.GeoJSON();
var features_pentrusuprapunereterasa_2 = format_pentrusuprapunereterasa_2.readFeatures(json_pentrusuprapunereterasa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pentrusuprapunereterasa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pentrusuprapunereterasa_2.addFeatures(features_pentrusuprapunereterasa_2);
var lyr_pentrusuprapunereterasa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pentrusuprapunereterasa_2, 
                style: style_pentrusuprapunereterasa_2,
                popuplayertitle: "pentru suprapunere terasa",
                interactive: true,
                title: '<img src="styles/legend/pentrusuprapunereterasa_2.png" /> pentru suprapunere terasa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_tempuri_poly_1.setVisible(true);lyr_pentrusuprapunereterasa_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_tempuri_poly_1,lyr_pentrusuprapunereterasa_2];
lyr_tempuri_poly_1.set('fieldAliases', {'id': 'id', 'supr': 'supr', });
lyr_pentrusuprapunereterasa_2.set('fieldAliases', {'LABEL': 'LABEL', });
lyr_tempuri_poly_1.set('fieldImages', {'id': 'TextEdit', 'supr': 'TextEdit', });
lyr_pentrusuprapunereterasa_2.set('fieldImages', {'LABEL': 'TextEdit', });
lyr_tempuri_poly_1.set('fieldLabels', {'id': 'no label', 'supr': 'no label', });
lyr_pentrusuprapunereterasa_2.set('fieldLabels', {'LABEL': 'no label', });
lyr_pentrusuprapunereterasa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});