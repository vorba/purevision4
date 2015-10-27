'use strict';

var northwindApp = angular.module('northwindApp', ['kendo.directives', 'ngRoute', 'ngAnimate'])
    .config(function ($routeProvider)
    {
        $routeProvider
            .when('/home',
            {
                templateUrl: '/home/home',
                controller: 'homeController'
            })
            .when('/customer',
            {
                templateUrl: '/customer',
                controller: 'customerController'
            })
            .when('/customer/edit/:id',
            {
                templateUrl: '/customer/edit',
                controller: 'customerEditController'
            })
            .when('/schedule',
            {
                templateUrl: '/schedule',
                controller: '/scheduleController'
    })
            .when('/help',
            {
                templateUrl: '/help'
            })
            .otherwise(
            {
                redirectTo: '/home'
            });
    });