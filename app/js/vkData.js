var chatApp = angular.module('chatApp');
chatApp.factory('vkData', function vkData($http, $q, $location){
  return{
    checkAuth: function(location = '/'){
    VK.Auth.getLoginStatus(function(response){
  		if (response.session){
  			if(response.status=="connected")
          $location.path(location);
        else
          $location.path('/signIn');
  			}
      })
    },

    dialogs: function(){
      VK.Api.call('messages.getDialogs', {count: 200},
      function(r) {
  if(r.response) { return r.response}
  }
)}

      // var deferred = $q.defer();
      // $http({method: 'GET',
      // url: 'http://api.vk.com/method/messages.getDialogs',
      // params:{count: 200},
      // dataType: 'jsonp',
      // crossDomain: "true"}).
      // then(function success(response){
      //   deferred.resolve(response.data.question);
      // },function error(response) {
      //   deferred.reject(response.status);
      // });
      // return deferred.promise;
      //}
  }
});
