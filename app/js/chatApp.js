VK.init({'apiId': 5629561});

var chatApp = angular.module('chatApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/dialogs',
        {
            templateUrl:'/app/views/dialogs.html',
            controller:'dialogsController'
        });
        $routeProvider.when('/signIn',
        {
            templateUrl:'/app/views/signIn.html',
            controller:'signInController'
        });
        $routeProvider.otherwise(
        {
            redirectTo:'/signIn'
        });

        
});
