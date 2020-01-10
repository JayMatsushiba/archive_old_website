var URL = '/Users/jaymatsushiba/Documents/GitHub/JayMatsushiba.github.io/text/expeditions/2018-02-20-ElfinLakes.txt'
var ID = '#id01'

$(document).ready(function() {
    $.get(URL, function(data) {
        $(ID).text(data)
        }, 'text');
});
