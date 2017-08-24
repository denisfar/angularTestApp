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

    friends: function(){
      var deferred = $q.defer();
      VK.Api.call('friends.get', {count: 1000, fields: 'photo_100'},
      function success(r) {
        deferred.resolve(r)},
      function error(r){
        deferred.reject(r);
      })
      return deferred.promise;
    },

    friend: function(id){
      var deferred = $q.defer();
      VK.Api.call('users.get', { user_ids:id ,count: 1, fields: 'photo_200, sex, bdate, city'},
      function success(r) {
        deferred.resolve(r)},
      function error(r){
        deferred.reject(r);
      })
      return deferred.promise;
    }

  }
});
