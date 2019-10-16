module = angular.module('mainModule', ['ngRoute', 'ngAnimate'])
    .controller('appCtrl', function($scope, $rootScope, $location) {

        $rootScope.changeLocation = function(location, parameters) {
            preChangeLocation();
            $location.path(location + "/?" + parameters);
        }

        $rootScope.goToExperiment = function(exp) {
            preChangeLocation();
            $location.path("experiment").search({"e": exp})
        }

        $rootScope.vanillaChangeLocation = function(location) {
            preChangeLocation();
            $location.path(location);
        }

        $scope.experiments = [
            /*
                name: name of the experiment
                shortname: name used in URL parameter and file location
                image: preview image file name (assumed in previews/)
            */
            {
                name: "boids",
                shortname: "boids",
            },
            {
                name: "Prime Spiral",
                shortname: "primes",
            }
        ]

        preChangeLocation = function() {} // Placeholder
    })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'menu.html'
            })
            // .when('/e/:experiment', {
            //     templateUrl: 'experiment.html'
            // })
            .otherwise({
                templateUrl: "404.html"
            })

        $locationProvider.html5Mode(true);
    })