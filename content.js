var some = $(".captcha img").attr('src');
alert(some);
var encoded = encodeURIComponent(some);

// https://10.216.55.119:80/?arg=hello open this site manually in the browser and add it to trusted sites
uri = "https://10.216.55.119:80/?arg=" + encoded;
$.get(uri, function( data ) {
  //$( ".result" ).html( data );
  alert(data);
  alert( "Load was performed." );
});

/*
$(".captcha img").each(function(k,v) {
    //If all you want is the src of the image, no need to make it into a jQuery object.
    var src = v.src; //Get the source.
    //Do something with it.
	alert(src);
});

*/