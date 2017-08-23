var chatApp = angular.module("chatApp");
chatApp.controller("dialogsController", function dialogsController($scope, vkData){
   $scope.dialogs =vkData.dialogs();//.then(function(value){$scope.dialogs = value});

});
