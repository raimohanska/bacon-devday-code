$.mockjax({
  url: '/usernameavailable/*',
  dataType: 'json',
  response: function(settings) {
    var username = settings.url.match(/.+\/(\w+$)/)[1]
    var available = username.length % 2 == 0
    this.responseText = available;
  }
});

$.mockjax({
  url: "/register",
  dataType: "json",
  type: "post",
  response: function(settings) {
    this.responseText = "true"
  }
});
