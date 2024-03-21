(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.checkItems = function () {
        var items = $scope.lunchItems;
        // Implement functionality to check lunch items and update message
        if (items) {
          var itemArray = items.split(',');
          var itemCount = 0;
          for (var i = 0; i < itemArray.length; i++) {
            // Trim each item to remove leading and trailing spaces
            var item = itemArray[i].trim();
            // Check if the item is not an empty string and not an empty item
            if (item !== "" && item !== ",") {
              itemCount++;
            }
          }
          if (itemCount <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        } else {
          $scope.message = "Please enter data first";
        }
      };
    }
  })();
  