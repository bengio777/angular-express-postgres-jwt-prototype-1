angular.module('jwt-prototype', ['ngRoute'])
.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/javascripts/login/login.template.html',
      controller: 'login.controller.js'
    })
    .otherwise({
      redirectTo: '/'
    })
})
