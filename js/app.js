/*global angular */

/**
 * The main Contacts app module
 *
 * @type {angular.Module}
 */

angular = require('angular');
require('angular-route');
require('../dist/templateCachePartials');

window.$ = window.jQuery = require('jquery');
var bootstrapjs = require('bootstrap-sass');


angular.module('contactsApp', ['ngRoute','contactsPartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'ContactsCtrl',
			templateUrl: '/partials/contacts-app.html'	
		};

		$routeProvider
			.when('/', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});


require('contactsCtrl');
require('contactsService');
require('contactsList');
require('newContactForm');


