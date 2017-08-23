var chatApp = angular.module("chatApp");
chatApp.controller("signInController", ['$scope', 'vkData', function signInController($scope, vkData){

  vkData.checkAuth("/dialogs");

  $scope.auth = function(){
    VK.Auth.login(function(response){
		if(response.session)
			$location.path('/dialogs');
	},2);
  }
}])
