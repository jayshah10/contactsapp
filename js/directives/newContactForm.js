/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */

angular = require('angular');

angular.module('contactsApp')
    .directive('newContactForm', function (contactsService,$rootScope) {
    return {
        restrict: 'E',        
        scope:{},
        templateUrl: '/partials/newContactForm.html',
        link: function (scope, element, attrs) { 
            scope.validationError = ""; 
            
            scope.newContact = {}; 

            scope.saveContact = function(){

                contactsService.addContact(scope.newContact)
                .then(function(success){
                     $rootScope.$broadcast("view contact",{contact:scope.newContact,message:success});
                })
                .catch(function(failure){
                     scope.validationError=failure;
                });
            };

        } 
    }
});