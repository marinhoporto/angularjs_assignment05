(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService','ApiPath'];
function MyInfoController(SignupService,ApiPath) {
   console.log("MyInfoController -> Init");
   var myinfo = this;
   myinfo.user = SignupService.getSignupOptions();
   myinfo.url_path = ApiPath + "/images/";
 }

})();
