var captcha_str = $(".captcha img").attr('src');
var encoded_str = encodeURIComponent(captcha_str);

var jsonData = { 'captchaString' : encoded_str }

var settings = {
  "crossDomain": true,
  "url": "https://nn-captcha.appspot.com/predict",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "datatype": "json",
  },
  "processData": false,
  "data": JSON.stringify(jsonData)
}

$.ajax(settings).done(function (response) {
  $("#drcaptcha").val(response)
});