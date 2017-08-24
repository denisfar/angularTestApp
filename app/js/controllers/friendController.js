var chatApp = angular.module("chatApp");
chatApp.controller("friendController", function friendController($scope,$routeParams, $injector, vkData){
  var locals = { id: $routeParams['id']}
  $injector.invoke(vkData.friend, null,locals).then(function(value){$scope.friend = value.response[0]});
  // vkData.friend.apply(id).then(function(value){$scope.friend = value.response[0]});
   setTimeout(function () {
     $scope.friend;
   }, 1000);
});
