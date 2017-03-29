angular.module('AxonIQ', ['ngMaterial', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                title: 'AxonIQ - Home',
                templateUrl: 'pages/main.html'
            })
            .state('home.framework', {
                title: 'Axon Framework - Home',
                url: '/',
                templateUrl: 'pages/home.html'
            })
            .state('home.blog', {
                title: 'AxonIQ - Blog',
                url: 'blog',
                templateUrl: 'pages/blog.html'
            })
    })