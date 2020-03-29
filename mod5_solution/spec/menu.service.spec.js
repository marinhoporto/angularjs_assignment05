describe('menuservice', function () {

  var menuservice;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return menu item', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/A1.json').respond({
      "id":1,
      "short_name":"A1",
      "name":"Won Ton Soup with Chicken",
      "description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
      "price_small":2.55,
      "price_large":5.0,
      "small_portion_name":"pint",
      "large_portion_name":"quart",
      "created_at":"2020-03-21T20:14:33.846Z",
      "updated_at":"2020-03-21T20:14:33.846Z",
      "category_short_name":"A",
      "image_present":true
    });
    menuservice.getMenuItem("a1").then(function(response) {
      expect(response.data).toEqual({
        "id":1,
        "short_name":"A1",
        "name":"Won Ton Soup with Chicken",
        "description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
        "price_small":2.55,
        "price_large":5.0,
        "small_portion_name":"pint",
        "large_portion_name":"quart",
        "created_at":"2020-03-21T20:14:33.846Z",
        "updated_at":"2020-03-21T20:14:33.846Z",
        "category_short_name":"A",
        "image_present":true
      });
    });
    $httpBackend.flush();
  });

  it('should return an error', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/AAA.json').respond([
      {"status":"500","error":"Internal Server Error"}
    ]);
    menuservice.getMenuItem("aaa").then(function(response) {
      expect(response.data).toEqual([
        {"status":"500","error":"Internal Server Error"}
      ]);
    });
    $httpBackend.flush();
  });

});
