/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */

angular = require('angular');

angular.module('contactsApp')
    .directive('contactsList', function ($rootScope) {
    return {
        restrict: 'E',        
        scope: {
            contacts: '=',          
        },
        templateUrl: '/partials/contactsList.html',
        link: function ($scope, element, attrs) { 
            $scope.searchTerm = "";

            $scope.viewContact = function(contact){
               $rootScope.$broadcast("view contact",{contact:contact});
            };

            $scope.newContact = function(){
               $rootScope.$broadcast("new contact",{});
            };


            $scope.filterFunction = function(contact){
                return( $scope.searchTerm === "" || 
                        contact.name.indexOf($scope.searchTerm)!= -1 ||
                        contact.email.indexOf($scope.searchTerm) != -1
                      )
            };
        } 
    }
});