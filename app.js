var myApplication = angular.module("myApplication", []);

        myApplication.controller("MyController",
            function($scope) {
                $scope.aNumber = 4;
                $scope.addOne = function() {
                    $scope.aNumber++;
                };
                $scope.$watch("aNumber", function(newValue, oldValue) {
                    $scope.typeOfNumber = $scope.aNumber % 2 === 0 ? "Even" : "odd";
                });

                $scope.numArray = [2, 3, 4];
                $scope.pushNumber = function() {
                    $scope.numArray.push($scope.newNumber);
                };
                $scope.$watchCollection("numArray", function(newValue, oldValue) {
                    $scope.numArrayLength = $scope.numArray.length;
                });

                $scope.number1 = 9;
                $scope.number2 = 22;
                $scope.number3 = 112;
                $scope.addOneAll = function() {
                    $scope.number1++;
                    $scope.number2++;
                    $scope.number3++;
                };

                $scope.$watchGroup(['number1', 'number2', 'number3'], function(newValues, oldValues) {
                    $scope.typeOfNumber1 = newValues[0] % 2 === 0 ? "Even" : "odd";
                    $scope.typeOfNumber2 = newValues[1] % 2 === 0 ? "Even" : "odd";
                    $scope.typeOfNumber3 = newValues[2] % 2 === 0 ? "Even" : "odd";
                });
            });