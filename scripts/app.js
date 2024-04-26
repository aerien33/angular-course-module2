(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.buyItem = function (item) {
        ShoppingListCheckOffService.buyItem(item);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
        {
            name: "carrots",
            quantity: 3
        },
        {
            name: "cucumbers",
            quantity: 2
        },
        {
            name: "red peppers",
            quantity: 2
        },
        {
            name: "onions",
            quantity: 2
        },
        {
            name: "breads",
            quantity: 2
        }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
        return itemsToBuy;
    }

    service.getItemsBought = function () {
        return itemsBought;
    }

    service.buyItem = function (item) {
        itemsToBuy.splice(itemsToBuy.indexOf(item), 1);
        itemsBought.push(item);
    }
}

})();