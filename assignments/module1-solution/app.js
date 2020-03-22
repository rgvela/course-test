(function(){
'use strict';

  angular.module('LaunchCheck', [])
  .controller('LaunchCheckController', LaunchCheckController);

  LaunchCheckController.$inject = ['$scope'];
  function LaunchCheckController ($scope,$filter){
    //Scope variables
    $scope.dishes = "";
    $scope.message = "";
    $scope.messageClass = "";

    $scope.checkIfTooMuch = function(){
      if($scope.dishes != ""){
        var items = split($scope.dishes, ",");
        $scope.messageClass = "alert alert-success";

        if(items.length <= 3)
          $scope.message = "Enjoy";
        else
            $scope.message = "Too Much";
      }
      else {
        $scope.message = "Please, enter data first";
        $scope.messageClass = "alert alert-danger";
      }

    }
  /**
   * split - splits a string given the split character
   *
   * @param  {string} input The string to split
   * @param  {character} splitChar The character indicating how we are spliting the string
   * @return {array}      The array of strings
   */
    function split(input, splitChar) {
        var items = input.split(splitChar);
        var filteredItems = items.filter(function (item) {
          item = item.trim();
          return item != null && item != "";
        });
        return filteredItems;
    }
  }

})();
