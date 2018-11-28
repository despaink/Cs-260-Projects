angular.module('shopping',[])
.controller('MainCtrl',[
  '$scope','$http',
  function($scope,$http) {
    $scope.products = [];
    $scope.cart = [];
    $scope.getAll = function() {
			return $http.get('/shopping').success(function(data){
				angular.copy(data, $scope.products);
			});
    };
    $scope.getAll();
    $scope.create = function(product) {
			return $http.post('/shopping', product).success(function(data){
				$scope.products.push(data);
			});
    };
    $scope.DoShopping = function() {
      console.log("In Doshopping");
      angular.forEach($scope.products, function(value,key) {
        if(value.selected) {
          $scope.purchase(value);
          $scope.cart.push(value);
        }
      });
    }

    $scope.purchase = function(product) {
      return $http.put('/shopping/' + product._id + '/shop')
        .success(function(data){
          console.log("shopping worked");
          product.purchases += 1;
        });
    };

    $scope.addProduct = function() {
        console.log("adding Product");
      var newObj = {name:$scope.formProductName,price: $scope.formPrice,picture: $scope.formPictureURL,purchases:0};
      console.log(newObj);
      $scope.create(newObj);
      $scope.formProductName = '';
      $scope.formPrice = '';
      $scope.formPictureURL = '';

    }

    $scope.incrementpurchases = function(product) {
      $scope.purchase(product);
    };
 
    $scope.delete = function(product) {
      console.log("Deleting Name "+product.name+" ID "+product._id);
      $http.delete('/shopping/'+product._id)
        .success(function(data){
          console.log("delete worked");
      });
      $scope.getAll();
    };
  }
]);