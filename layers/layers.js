var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'ความลึก',
                interactive: true,
    title: 'ความลึก<br />\
    <img src="styles/legend/_1_0.png" /> 0 - 1 เมตร<br />\
    <img src="styles/legend/_1_1.png" /> 1 - 2 เมตร<br />\
    <img src="styles/legend/_1_2.png" /> 2 - 3 เมตร<br />\
    <img src="styles/legend/_1_3.png" /> 3 - 4 เมตร<br />\
    <img src="styles/legend/_1_4.png" /> 4 - 5 เมตร<br />\
    <img src="styles/legend/_1_5.png" /> 5 - 6 เมตร<br />\
    <img src="styles/legend/_1_6.png" /> 6 - 7 เมตร<br />\
    <img src="styles/legend/_1_7.png" /> 7 - 8 เมตร<br />\
    <img src="styles/legend/_1_8.png" /> 8 เมตร ขึ้นไป<br />\
    <img src="styles/legend/_1_9.png" /> พื้นที่เกาะ<br />\
    <img src="styles/legend/_1_10.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ระด': 'ระด', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ระด': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ระด': 'header label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});