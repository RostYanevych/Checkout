/**
 * Checkout controller
 */
angular.module('CheckoutApp')
    .controller('CheckoutController', function($scope, $uibModal, checkoutService) {

        $scope.currentStep = 1; //current checkout step
        $scope.totalPrice = 0; //price of all items in cart

        // Checkout steps. Used in progress indicator
        $scope.checkoutSteps = [
            {label:'Cart', icon:'glyphicon-shopping-cart'},
            {label:'Customer Information', icon: 'glyphicon-info-sign'},
            {label:'Confirmation', icon: 'glyphicon-ok-sign' }
        ];

        //cart initialization
        $scope.cart = checkoutService.getCart();

        // customer info
        $scope.customer = {
            name: '',
            email: ''
        };

        // recalculate total price when cart changes
        $scope.$watch('cart',
            function(e){
                $scope.totalPrice = checkoutService.calculateTotal();
            },
            true);

        /**
         * Sets current step. This triggers loading oa appropriate view
         * @param {Integer} step
         */
        $scope.gotoStep = function(step){
            $scope.currentStep = step;
        };

        /**
         * Decrease quantity of item in cart
         * @param {Object} item
         */
        $scope.decreaseQuantity = function(item){
            checkoutService.decreaseQuantity(item);
        };

        /**
         * Increase quantity of item in cart
         * @param {Object} item
         */
        $scope.increaseQuantity = function(item){
            checkoutService.increaseQuantity(item);
        };

        /**
         * Remove item from cart
         * @param {Object} item
         */
        $scope.removeItem = function(item){
            if(confirm('Remove '+item.name+' from your cart?')){
                checkoutService.removeFromCart(item);
            }
        };

        /**
         * Show order confirmation modal message
         */
        $scope.orderConfirmation = function(){
            $uibModal.open({
                animation: true,
                size: 'lg',
                scope: $scope,
                "templateUrl": 'app/templates/order-confirm-modal.html'
            });
        };

        /**
         * Close the currently active modal window
         */
        $scope.modalClose = function(){
            this.$dismiss();
        };

    });