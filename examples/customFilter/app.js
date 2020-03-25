(function(){
'use strict';

  /*angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){
    $scope.name = "rgv";
    $scope.sayHello = function (){
      return "Hello there";
    };
  });*/

  angular.module('customFilterExample', [])
  .controller('customFilterExampleController', CustomFilterExampleController)
  .filter('custom', CustomFilterFactory)
  .filter('customArg', CustomFilterFactoryArgs);
  //Register Filter Factory with the module
  //Specifying the Filter Factory that is responsible for creating our filter function
  //Name of the filter is "custom" inject it on the controller like this "custom""Filter"

  //////////////////

  //To protect from minification inject the services like this to the controller
  //Name it as
  CustomFilterExampleController.$inject = ['$scope', 'customFilter', 'customArgFilter'];
  function CustomFilterExampleController ($scope, customFilter, customArgFilter){
    $scope.msg = "some input";

    $scope.sayHello = function(){
      return $scope.msg;
    };

    $scope.sayHelloWithFilter = function(){
      return customFilter($scope.msg);
    }
    $scope.sayHelloWithFilterArgs = function(){
      return customArgFilter($scope.msg, "some", "none");
    }

  }

  /**
   * Define the Filter Factory Function
   *
   */
  function CustomFilterFactory(){
    return function (input){
      //Return changed input
      return input + " AAAAAA@@@";
    }
  }

  function CustomFilterFactoryArgs() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }
})();
