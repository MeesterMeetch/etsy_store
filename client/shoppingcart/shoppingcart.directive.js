(function() {
  'use strict';
  angular
    .module('store')
    .directive('shoppingCartItem', function(){
      return{
        restrict: 'E',
        templateUrl: 'shoppingcart/views/shoppingCartItem.html',
        scope: {
          p: '='
        },
        link: function(scope, element, attributes){
          element.children().on('mouseenter', function(){
            element.addClass('castShadow');
            element.find('img').addClass('growImage');
            element.find('a').addClass('growTitle');
            element.find('a').addClass('highlight');
            element.addClass('highlight');

          });
          element.children().on('mouseleave', function(){
            element.removeClass('castShadow');
            element.find('img').removeClass('growImage');
            element.find('a').removeClass('growTitle');
            element.find('a').removeClass('highlight');
            element.removeClass('highlight');

          });
        }
      }
    })
})();
