describe('Checkout Service', function () {
    var $rootScope, checkoutService;
    beforeEach(module('CheckoutApp'));
    beforeEach(inject(function (_$rootScope_, _checkoutService_) {
        $rootScope = _$rootScope_;
        checkoutService = _checkoutService_;
    }));
    it('should return default cart',
        function () {
            var cart = checkoutService.getCart();
            expect(cart.length).toEqual(5);
        });
    it('should calculate total price',
        function () {
            var total = checkoutService.calculateTotal();
            expect(total).toEqual(2001);
        });
});