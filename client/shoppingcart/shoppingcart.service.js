(function() {
  'use strict';
  angular
    .module('shoppingcart')
    .factory('ShoppingCartService', function($http, $rootScope){
      var cartUrl = "http://tiy-fee-rest.herokuapp.com/collections/mitch-etsy_store";

      var getCart = function(){
        return $http.get(cartUrl).then(function(items){
          var cartArray = items.data;
          return cartArray;
        })
      };

      var addToCart = function(item){
        $http.post(cartUrl, item).success(function(response){
          $rootScope.$broadcast('item:created');
        }).error(function(error){
        })
      }

      var removeFromCart = function(id){
        $http.delete(cartUrl + "/" + id).success(function(response){
          $rootScope.$broadcast('item:deleted');
        }).error(function(error){
        })
      }

      return{
        getCart: getCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      };
    });


})();
