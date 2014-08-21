var controllers = {};

controllers.HeaderController = function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
};

controllers.View1Controller = function($scope, $http, $location) {
  $scope.formData = {};
  $scope.isUserAuthenticated = function() {
    var promise = $http ({
        method : 'POST',
        url : '/app/data/data.json',
        // TODO: this won't work as we are making calls from localhost to
        // arlo.netgear.com
        // url : '//arlo.netgear.com/nusweb/login',
        data : {
          'email':document.getElementById('userName').value,
          'password':document.getElementById('userPassword').value
        }
    });
    promise.then(function(response) {
      $scope.userAuthenticated =
        Math.random()<=.5
        ? response.data[0].userAuthenticated
        : response.data[1].userAuthenticated;
      $scope.userAuthenticated ? $location.path('/view2') : $location.path('/view3');
    });
  };
};

controllers.View2Controller = function ($scope) {
  //TODO: implementation
};

controllers.View3Controller = function ($scope) {
  //TODO: implementation
};

myApp.controller(controllers);
