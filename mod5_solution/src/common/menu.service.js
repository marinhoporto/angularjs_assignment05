(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  console.log("MenuService -> Init");
  var service = this;
  service.categories = [];

  service.getCategories = function () {

    if(service.categories == "") {
        return $http.get(ApiPath + '/categories.json').then(function (response) {
          service.categories = response.data
          console.log("MenuService -> getCategories() calling for the first");
          console.log("Data",service.categories);
          return response.data;
        });
    } else {
        console.log("MenuService -> getCategories() returning cached object");
        console.log("Data",service.categories);
        return service.categories;
    }
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
