angular.module('App', [])
.config(['$httpProvider', function($httpProvider) {
       delete $httpProvider.defaults.headers.common["X-Requested-With"]
   }])

  .controller('WeatherCtrl', function($http) {
    var self = this;

    this.getWeather = function() {
      //alert('Weather is sunny!')
      this.city;
      this.cloud = false;
      this.show = false

      var appId = '8955ed88a3c211ccce8222a9866954f3';
      var url = "http://api.openweathermap.org/data/2.5/weather?q=" + self.city + "&units=metric&APPID=8955ed88a3c211ccce8222a9866954f3"

      var request = {
        callback: 'JSON_CALLBACK'
      }
      //console.log(url)
      $http({
        method: 'JSONP',
        url: url,
        params: request
      })
      .then(function(result) {
        console.log(result)
        self.weather = result
        self.show = true
        this.weatherData = result.data.weather[0].main

        console.log(self.name)
          if (self.weatherData === 'Clouds') {
            self.cloud = true;
          }
          else {
            console.log()
          }
      })
      //this.getCountry = function() {
        this.countryCode;
        var r = {
          callback: 'JSON_CALLBACK'
        }
        $http({
          method: 'JSONP',
          url: "http://api.geonames.org/countryInfoJSON?formatted=true&lang=itE&username=tommycakes&style=full",
          params: r
        })
        .then(function(data) {
            console.log(data)
            //
            // angular.forEach(countries, function(country, index) {
            //   if (self.city === country) {
            //     console.log('yes')
            //     self.countryCode = cCode;
            //     console.log(self.countryCode)
            //   }
            // })
            //
            var country = data.data.geonames[0].countryName
            var cCode = data.data.geonames[0].countryCode
            if (self.city === country) {
              console.log('yes')
              self.countryCode = cCode;
              console.log(self.countryCode)
            }
        })
      //}
    }
    //

})
.controller('CountryCtrl', function() {
  var self = this;
  // this.getCountry = function() {
  //   http({
  //     method: 'JSON',
  //     url: "http://api.geonames.org/findNearbyPostalCodesJSON?postalcode=8775&country=CH&radius=10&username=demo"
  //   })
  // }
})
