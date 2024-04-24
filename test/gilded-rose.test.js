import { Shop, Item } from "../src/gilded-rose";

describe("Gilded Rose item", function () {

  it("should keep name", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Stuff");
  });

  it("should decrease sellIn", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(5 - 1);
  });

  it("should decrease sellIn each day", function () {
    const gildedRose = new Shop([new Item("Stuff", 10, 5)]);
    let items;
    for (let days = 1; days <= 5; days++) {
      items = gildedRose.updateQuality();     
      expect(items[0].sellIn).toBe(10 - days);
    }
  });

  it("should decrease quality", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5 - 1);
  });

  it("should decrease quality each day", function () {
    const gildedRose = new Shop([new Item("Stuff", 8, 10)]);
    let items;
    for (let days = 1; days <= 5; days++) {
      items = gildedRose.updateQuality();     
      expect(items[0].quality).toBe(10 - days);
    }
  });

  it("should decrease 2 quality each day when sellIn is less than 0", function () {
    const gildedRose = new Shop([new Item("Stuff", -1, 10)]);
    let items;
    for (let days = 1; days <= 5; days++) {
      items = gildedRose.updateQuality();     
      expect(items[0].quality).toBe(10 - 2 * days);
    }
  });

  it("should never be over 50 quality", function() {
    const gildedRose = new Shop([new Item("Stuff", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeLessThanOrEqual(50);
  })

  it("should never be under 0 quality", function() {
    const gildedRose = new Shop([new Item("Stuff", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  })

  it("should only increase aged Brie's quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  })

  it("should always be 80 quality for legendary items", function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 800)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  })

});
