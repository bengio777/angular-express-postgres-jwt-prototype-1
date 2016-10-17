angular.module('jwt-prototype')
.controller('login.controller.js', function ($scope, $http) {
  $scope.create = (form) => {
    const user = {
      username: form.createAccount.username,
      password: form.createAccount.password
    }

    $http.post('/users/create', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  $scope.loginSubmitted = () => {
    console.log('login form submitted');
  }
})
