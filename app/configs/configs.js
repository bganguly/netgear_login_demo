var myConfig = function($routeProvider) {
  $routeProvider
  .when('/',{
    controller:'View1Controller',
    templateUrl: 'app/partials/View1.html'})
  .when('/view2',{
    controller: 'View2Controller',
    templateUrl: 'app/partials/View2.html'})
  .when('/view3',{
    controller: 'View3Controller',
    templateUrl: 'app/partials/View3.html'})
  .otherwise({redirecTo: '/'});
};
myApp.config(myConfig);
