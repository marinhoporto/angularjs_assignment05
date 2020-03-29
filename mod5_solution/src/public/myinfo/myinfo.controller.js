(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {
   console.log("MyInfoController -> Init");
   var myinfo = this;
   myinfo.user = SignupService.getSignupOptions();   
 }

})();
