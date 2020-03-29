(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignupService','MenuService'];
function SignUpController(SignupService,MenuService) {
  console.log("SignUpController -> Init");
  var signup = this;
  signup.message_submit = "";
  signup.message_favdish = "";
  signup.menu_item;

  // Submit the form
  signup.submitForm = function(){
      console.log("SignUpController -> submitForm()");
      signup.checkUserDish(signup.user.fav_dish);
  };

  // Check user dish
  signup.checkUserDish = function(user_dish) {
      console.log("SignUpController -> checkUserDish(): ",user_dish);
      if(user_dish == null || user_dish.trim == ""){
          signup.message_favdish = "No such menu number exists";
          return false;
      }
      else{
          signup.promisse = MenuService.getMenuItem(user_dish);
          signup.promisse.then(function (response) {
          console.log("SignUpController -> checkUserDish() -> Menus EXISTS, response status = ",response.status,response.data);
          signup.user.fav_dish_items = response.data;
          signup.sendNewsLetter();
          return true;
        })
        .catch(function (error) {
          console.log("SignUpController -> checkUserDish() -> Menus NOT exist, response status = ",error.status);
          signup.message_favdish = "No such menu number exists";
          return false;
        })
      }
  };

  // Send data to newsletter
  signup.sendNewsLetter = function(){
     signup.signup_options = [{
     "first_name" : signup.user.first_name,
     "last_name" : signup.user.last_name,
     "email" : signup.user.email,
     "address" : signup.user.address,
     "phone" : signup.user.phone,
     "fav_dish" : signup.user.fav_dish,
     "fav_dish_items" : signup.user.fav_dish_items
     }];
     SignupService.setSignupOptions(signup.signup_options);
     signup.clearFields();
     signup.message_submit = "Your information has been saved";
     console.log("SignUpController -> sendNewsLetter() -> message",signup.message_submit);
  }; 

 // Clear fields and message
  signup.clearFields = function(){
      signup.user = {};
      signup.message_submit = "";
      signup.message_favdish = "";
  };
}

})();
