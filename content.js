var captcha_str = $(".captcha img").attr('src');
var encoded_str = encodeURIComponent(captcha_str);

// https://10.216.55.119:80/predict?captchaString=hello open this site manually in the browser and add it to trusted sites
uri = "https://10.216.55.119:80/predict?captchaString=" + encoded_str;
$.get(uri, function( data ) {
  //alert(data);
  $("#drcaptcha").val(data)
});
