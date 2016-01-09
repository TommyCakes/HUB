angular.module('App', ['angular-skycons', 'ngGeolocation'])
.config(['$httpProvider', function($httpProvider) {
       delete $httpProvider.defaults.headers.common["X-Requested-With"]
   }])
  //  .directive('svg', function() {
  //    return {
  //      restrict: 'E',
  //      templateUrl: 'app/templates/hi.html'
  //    };
  //  });
