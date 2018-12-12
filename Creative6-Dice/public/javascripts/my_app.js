angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
    
    $scope.rollDice = function(){

      var maxVal = 0;
      maxVal += document.getElementById("d4").value *4;
      maxVal += document.getElementById("d6").value *6;
      maxVal += document.getElementById("d8").value *8;
      maxVal += document.getElementById("d10").value *10;
      maxVal += document.getElementById("d12").value *12;
      maxVal += document.getElementById("d20").value *20;
      if(maxVal < 0){

      }
    
     else{      

        document.getElementById("diceValue").innerHTML= Math.floor((Math.random() * maxVal) + 1);

        
      }
      
     
      
    };
  }]);