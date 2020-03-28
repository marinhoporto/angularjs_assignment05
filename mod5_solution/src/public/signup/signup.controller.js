(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuCategories','SignupService'];
function SignUpController(menuCategories,SignupService) {
  console.log("SignUpController -> Init");
  var signup = this;
  signup.menuCategories = menuCategories;

  signup.submit = function(){
    console.log("Submit function clicked",
    "First Name: ",signup.first_name,
    "Last Name: ", signup.last_name,
    "Email: ", signup.email,
    "Address: ", signup.address,
    "Phone: ", signup.phone,
    "Menu: ", signup.fav_menu);
  };

  signup.showSelectValue = function(selected) {
    console.log("Selected menu",selected);
  };
}

})();
