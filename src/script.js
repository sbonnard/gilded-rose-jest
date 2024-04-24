import { Shop, Item } from "../src/gilded-rose.js";

const shop = new Shop([
    new Item('Bread', 3, 6),
    new Item('Backstage passes to a TAFKAL80ETC concert', 8, 32),
    new Item('Aged Brie', -5, 2)
]);
shop.updateQuality();
console.log(shop);