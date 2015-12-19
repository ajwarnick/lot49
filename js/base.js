$( document ).ready(function() {
    //console.log( "ready!" );
    //alert("test");
    console.log("hello console");
});


window.onload = function() {
    // try to create a WebGL canvas (will fail if WebGL isn't supported)
    console.log('test');
    try {
        var canvas = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }

    // convert the image to a texture
    var image = document.getElementById('image');
    var texture = canvas.texture(image);

    // apply the ink filter
    //canvas.draw(texture).ink(0.25).update();
    
    canvas.draw(texture).dotScreen(320, 239.5, 0.53, 3).update();

    // replace the image with the canvas
    image.parentNode.insertBefore(canvas, image);
    image.parentNode.removeChild(image);

    // Note: instead of swapping the <canvas> tag with the <img> tag
    // as done above, we could have just transferred the contents of
    // the image directly:
    //
    //     image.src = canvas.toDataURL('image/png');
    //
    // This has two disadvantages. First, it is much slower, so it
    // would be a bad idea to do this repeatedly. If you are going
    // to be repeatedly updating a filter it's much better to use
    // the <canvas> tag directly. Second, this requires that the
    // image is hosted on the same domain as the script because
    // JavaScript has direct access to the image contents. When the
    // two tags were swapped using the previous method, JavaScript
    // actually doesn't have access to the image contents and this
    // does not violate the same origin policy.
};
