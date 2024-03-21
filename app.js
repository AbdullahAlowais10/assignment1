(function (){
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
                if (itemArray.length <= 3) {
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
