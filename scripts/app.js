(function () {
'use strict';

angular.module('ShoppingListCheckOff', []);
.controller('ToBuyController', ToBuyController);
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ToBuyController() {
    var toBuy = this;

}

function AlreadyBoughtController() {
    var alreadyBought = this;
}

function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [];
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