/**
 * Application startup script. Creates application main module, configures routes and runs app
 */
(function () {
    var _app = angular.module('CheckoutApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    // Configure routes. Currently we have only one page, so there's just one route
    // In the future we may need more of them.
    // We can add current checkout step to the route, e.g. '/cart/:step', but this would require us to store info, which is out of scope of this task.
    _app.config(function ($routeProvider) {
        $routeProvider
            .when('/cart', {
                templateUrl : 'app/templates/checkout.html',
                controller: 'CheckoutController'
            })
            .otherwise('/cart'); //all routes go to cart
    });

    _app.run(function ($rootScope, $location) {});
})();
