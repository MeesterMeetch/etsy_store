(function() {
  'use strict';
  angular
    .module('store')
    .directive('productItem', function(){
      return{
        restrict: 'E',
        templateUrl: 'store/views/storeItem.html',
        scope: {
          p: '='
        },
        link: function(scope, element, attributes){
          element.on('mouseenter', function(){
            element.addClass('growImage');
            element.addClass('growTitle');
            element.addClass('castShadow');
          });
          element.on('mouseleave', function(){
            element.removeClass('growImage');
            element.removeClass('growTitle');
            element.removeClass('castShadow');
          });
        }
      }
    })
})();
