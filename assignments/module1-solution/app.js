(function(){
'use strict';

  angular.module('LaunchCheck', [])
  .controller('LaunchCheckController', LaunchCheckController);

  LaunchCheckController.$inject = ['$scope','$filter'];
  function LaunchCheckController ($scope,$filter){
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function(){
      if($scope.dishes != ""){
        var items = split($scope.dishes, ",");

        if(items.length <= 3)
          $scope.message = "Enjoy";
        else
            $scope.message = "Too Much";
      }
      else {
        $scope.message = "Please, enter data first";
      }

    }


    function split(input, splitChar) {
        // do some bounds checking here to ensure it has that index
        var items = input.split(splitChar);
        var filteredItems = items.filter(function (item) {
          item = item.trim();
          return item != null && item != "";
        });
        console.log(filteredItems);
        return filteredItems;
    }
  }

})();
