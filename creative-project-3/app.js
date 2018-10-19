/*global angular*/
angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
    
    $scope.src ="";
    $scope.text="";
  var count =0;
    $scope.generateNew = function(){
        
        if(count ==0)
        $scope.here = 'your button works (click again) \n';
        if(count == 1)
        $scope.here = 'but what does it do? (click again)\n';
        if(count == 2)
        $scope.here = 'nothing of particular value :p \n';
        if(count == 3)
        $scope.here ='I wasnt joking, no need to keep clicking the button';
        if(count >3)
        $scope.here +='!';
        
        console.log(count);
        
        count++;
        
    };
    
    
    
    
    
    
}