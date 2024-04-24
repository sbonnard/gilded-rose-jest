class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



// function updateQualityOfItem() {
//   updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {

//     };
//   };
// }

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    const names = {
      Brie: "Aged Brie",
      Sulfuras : "Sulfuras, Hand of Ragnaros",
      Backstage : "Backstage passes to a TAFKAL80ETC concert"
    }

    for (const item of this.items) {
      if (item.name != names.Brie && item.name != names.Backstage) {
        if (item.quality > 0 && item.name != names.Sulfuras) {
            item.quality--;
          }
        }
       else {
        if (item.quality < 50) {
          item.quality++;
          if (item.name == names.Backstage) {
            if (item.sellIn < 11 && item.quality < 50) {
                item.quality++;
              }
            }
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality++;
              }
            }
      }
      if (item.name != names.Sulfuras) {
        item.sellIn--;
      }
      if (item.sellIn < 0) {
        if (item.name != names.Brie) {
          if (item.name != names.Backstage) {
            if (item.quality > 0) {
              if (item.name != names.Sulfuras) {
                item.quality--;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
      if (item.name === names.Sulfuras) {
        item.quality = 80;
      }
    }

    return this.items;
  }
}



export {
  Item,
  Shop,
}
