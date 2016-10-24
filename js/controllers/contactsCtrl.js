/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular = require('angular');

angular.module('contactsApp')
	.controller('ContactsCtrl', function TodoCtrl($scope, $routeParams, $filter, contactsService) {
		'use strict';

        $scope.mode = ""; 
        $scope.selectedContact = {};

        $scope.viewContact = function(contact){
            $scope.mode = "view";
            $scope.selectedContact = contact;
        }

        $scope.newContact = function(){
            $scope.mode = "new";
        };
                
        $scope.$on("view contact",function(event,args){
            $scope.viewContact(args.contact);
        });
        
        $scope.$on("new contact",function(event,args){
            $scope.newContact();
        })

        contactsService.getContacts().then(
             function(data){
                $scope.contacts = data;
             }
         )
		
	});
