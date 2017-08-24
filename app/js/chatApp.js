VK.init({'apiId': 5629561});

var chatApp = angular.module('chatApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/friends',
        {
            templateUrl:'/app/views/friends.html',
            controller:'friendsController'
        });
        $routeProvider.when('/friend/:id',
        {
            templateUrl:'/app/views/friend.html',
            controller:'friendController'
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


})
.run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
});
