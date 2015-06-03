$(function() {
    Tabletop.init( { key: '0Alpnr6hvfbaqdGlNc0ZTT1h0ZnVzVlFzQjZrbHBxZWc',
        callback: function(data, tabletop) {
            console.log(data);
            var clubs = ["laser","optimist","j420","j29","yacht"];
            for (var i=0; i<data.length; i++) {
                for (var j=0; j<clubs.length; j++) {
                    var selector = "#"+ clubs[j]+ "-"+data[i].key;
                    if ($(selector).length) {
                        $(selector).html(data[i][clubs[j]]);
                    }
                }
            }
        },
        simpleSheet: true});
});