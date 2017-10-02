// clipmove beign
var mapCanvas = $('#mapCanvas'),
    box = $('#box');

var mapCanvas = $('#mapCanvas');
var clipWidth = 90;
var clipHeight = 50;
var wMove = 0;
var hMove = 0;
var wRis = mapCanvas.width() - clipWidth,
    hRis = mapCanvas.height() - clipHeight;
var d = {},
    x = 6;
///
var str = "inset(" +
    hMove + "px " + (mapCanvas.width() - wMove - clipWidth) + "px " + (mapCanvas.height() - hMove - clipHeight) + "px " + wMove + "px ";
///

// move arraw v
// move arraw beign
var arrawH = $("polygon#arrawH");
var arrawV = $("polygon#arrawV");
var arrawHStr = 'translate(' + (wMove) + ', 0)';
var arrawVStr = 'translate(' + (wMove) + ', 0)';
// move arraw end

// move arraw line begin
var arrawLineH = $("#lineH");
var arrawLineV = $("#lineV");
var arrawLinHStr = 'translate(' + (wMove) + ', 0)';
var arrawLinVStr = 'translate(' + (wMove) + ', 0)';

// move arraw line end


// masking function
function returnWValue(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wRis ? wRis : n;


}

function returnHValue(v, a, b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > hRis ? hRis : n;


}
// masking function end

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

//add x y coordinate
var locationInfo = "";
jQuery(document).ready(function($) {
    locationInfo = $("#locationInfo");



});

setInterval(function() {
    // move masking
    wMove = returnWValue(wMove, 37, 39);
    hMove = returnHValue(hMove, 38, 40);
    str = "inset(" +
        hMove + "px " + (mapCanvas.width() - wMove - clipWidth) + "px " + (mapCanvas.height() - hMove - clipHeight) + "px " + wMove + "px ";
    mapCanvas.css('clipPath', str);
    locationInfo.html("x:" + wMove + ",y:" + hMove);

    // move arraw
    arrawHStr = 'translate(' + wMove / .74 + 'px, 0px)';
    arrawVStr = 'translate(0px, ' + hMove / .7 + 'px)';
    arrawH.css('transform', arrawHStr);
    arrawV.css('transform', arrawVStr);
    // move arraw line
    arrawLinHStr ='translate(' + wMove + 'px, 0px)';
    arrawLinVStr ='translate(0px, ' + hMove + 'px)';
    arrawLineH.css('transform', arrawLinHStr);
    arrawLineV.css('transform', arrawLinVStr);

}, 20);
// clipmove end