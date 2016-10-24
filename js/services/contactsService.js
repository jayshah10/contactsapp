/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular = require('angular');

angular.module('contactsApp')
	.service('contactsService', function ($http) {
		'use strict';

        this.contacts = [
    {
        "name": "leanne graham",
        "email": "leanne@gmail.com",
        "job": "web developer",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
        "name": "ervin howell",
        "email": "ervin@gmail.com",
        "job": "tech lead",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "clementine bauch",
        "email": "clementine@gmail.com",
        "job": "web developer",
        "location": "liverpool",
        "tag": "following",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "chelsey dietrich",
        "email": "chelsey@gmail.com",
        "job": "baker",
        "location": "london",
        "tag": "family",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "dennis schulist",
        "email": "dennis@gmail.com",
        "job": "pen tester",
        "location": "manchester",
        "tag": "acquaintance",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    }
];

        this.getContacts = function(){
            var self = this;

            return new Promise(function(resolve,reject){
                if(self.contacts.length > 0){
                    resolve(self.contacts);
                }else{
                    $http.get('http://www.mocky.io/v2/5807df4a10000004122b74e2')
                    .then(
                        function(data){
                            self.contacts = data; 
                            resolve(this.contacts);
                        },
                        function(error){
                            reject("Some error in getting the data.")
                        }
                    );
                }
            })
        };

        this.addContact = function(newContact){
            var self = this;

            return new Promise(function(resolve,reject){
                var found = self.contacts.findIndex(function(contact){
                    return( contact.name === newContact.name );
                });

                if(found >= 0){
                    reject("Contact already exists with the same name.");
                }else{
                    self.contacts.push(newContact);
                    resolve("Contact successfully saved.");
                }
            });
        };

        this.deleteContact = function(deleteContact){
            var self = this;

            return new Promise(function(resolve,reject){
                var found = self.contacts.findIndex(function(contact){
                    return( contact.name === deleteContact.name );
                });

                if(found >= 0){
                    self.contacts.splice(found,1);
                    resolve("Contact successfuly deleted.");
                }else{
                    reject("Contact not found.");
                }
            });
        };
	});