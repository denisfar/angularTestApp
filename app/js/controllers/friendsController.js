var chatApp = angular.module("chatApp");
chatApp.controller("friendsController", function friendsController($scope, vkData){
   vkData.friends.apply().then(function(value){$scope.friends = value.response});

});
