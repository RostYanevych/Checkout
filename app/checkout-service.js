/**
 * Checkout service.
 * Implements cart behavior: getting cart, removing items, calculation of total price
 */
angular.module('CheckoutApp').service('checkoutService', function() {
    var MAX_QUANTITY = 999; //maximal quantity of a particular item type in cart

    // initial cart value
    var _cart = [{id: 1, quantity: 1, name: "Shoes", price: 70},
                 {id: 2, quantity: 1, name: "Hat", price: 32},
                 {id: 3, quantity: 1, name: "Umbrella", price: 28},
                 {id: 4, quantity: 1, name: "Gloves", price: 45},
                 {id: 5, quantity: 1, name: "Scarf", price: 25}
    ];

    // Dynamically fill image property
    angular.forEach( _cart, function(item){
        item.image = 'resources/images/goods/'+item.id+'.jpg'
    });

    /**
     * Get cart
     * @returns {Object[]}
     */
    this.getCart = function() {
        return _cart;
    };

    /**
     * Remove item from cart
     * @param {Object} item
     */
    this.removeFromCart = function(item) {
        var index = _cart.indexOf(item);
        _cart.splice(index, 1);
    };

    /**
     * Calculate total price of items in cart
     * @returns {number}
     */
    this.calculateTotal = function(){
        var total = 0;
        angular.forEach( _cart, function(item){
            total = total + item.price*item.quantity;
        });
        return total;
    };

    /**
     * Decrease quantity of particular item in cart
     * @param {Object} item
     */
    this.decreaseQuantity = function(item){
        if(item.quantity > 1)
            item.quantity--;
    };

    /**
     * Increase quantity of particular item in cart
     * @param {Object} item
     */
    this.increaseQuantity = function(item){
        if(item.quantity < MAX_QUANTITY)
            item.quantity++;
    };
});
