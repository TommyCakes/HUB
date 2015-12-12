angular.module('App')
 .controller('WeatherCtrl', function($http, $geolocation, $interval) {
  var self = this;

  //get date
    self.date = new Date()

  //ticking clock
  var tick = function() {
    self.clock =  Date.now();
  }
  tick()
  $interval(tick, 1000);

  //this.getWeather = function() {
    //alert('Weather is sunny!')
    this.city;
    this.cloud = false;
    this.show = false

    // check for Geolocation support
if (navigator.geolocation) {
console.log('Geolocation is supported!');
}
else {
console.log('Geolocation is not supported for this Browser/OS version yet.');
}

    $geolocation.watchPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true
        });
        self.myPosition = $geolocation.position;

    var lat = 51.75;
    var long = -1.583
    var id = '6214db0042e9d02f80c5f3ba15803622';
    var url = "https://api.forecast.io/forecast/" + id + "/" + lat +"," + long +"?units=si";

    var request = {
      callback: 'JSON_CALLBACK'
    }
    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .then(function(data) {
      console.log(data)
      self.weather = data.data;
      self.weatherIcon = self.weather.currently.icon
      console.log(self.weatherIcon)
    })

    //getCountry
      this.countryCode;
      var r = {
        callback: 'JSON_CALLBACK'
      }
      $http({
        method: 'JSONP',
        // url: "http://api.geonames.org/countryInfoJSON?formatted=true&lang=itE&username=tommycakes&style=full",
        url: "http://api.geonames.org/postalCodeSearchJSON?postalcode=Ox155BQ&maxRows=10&username=tommycakes",
        params: r
      })
      .then(function(data) {
          // console.log(data)
          self.lat = data.data.postalCodes[0].lat
          self.lng = data.data.postalCodes[0].lng
          // console.log(self.lat)

          // var country = data.data.geonames[0].countryName
          // var cCode = data.data.geonames[0].countryCode
          // if (self.city === country) {
          //
          // }
      })
      var today = self.date;
      var year = today.getFullYear()
      var dayInMonth = today.getDate();
      var month = today.getMonth();
      var apiKey = "f149183a-f055-4fc5-8863-00c29cd4e95f"
      var re = {
        callback: 'JSONP_CALLBACK'
      }
      $http({
        method: 'GET',
        // url: "http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=" + year +"-"+ dayInMonth +"-"+ month +"&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=f149183a-f055-4fc5-8863-00c29cd4e95f",
        url: "http://content.guardianapis.com/?api-key="+ apiKey +"&edition=uk&show-most-viewed=true&from-date=" + year +"-"+ dayInMonth +"-"+ month +"&show-fields=starRating,headline,thumbnail,short-url",
        parmas: re
      })
      .then(function(data) {
        self.news = data.data.response
        console.log(data.data.response)
      })
  //}
})
