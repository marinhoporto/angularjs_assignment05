(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


//SignupService.$inject = [''];
function SignupService() {
  console.log("SignupService -> Init");
  var service = this;
  service.signup_options = "";

  // Set the signup options
  service.setSignupOptions = function (p_signup_options) {
      service.signup_options = p_signup_options;
      console.log("SignupService -> setSignupOptions()",p_signup_options);
  };

  // Get the signup options
  service.getSignupOptions = function () {
      return service.signup_options;
  };

}

})();
