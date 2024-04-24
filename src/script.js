import { Shop, Item  } from "../src/gilded-rose.js";

const shop = new Shop([
    new Item('Bread', 3, 6),
    new Item('Backstage passes to a TAFKAL80ETC concert', 8, 32)
]);

shop.updateQuality();
console.log(shop);