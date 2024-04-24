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

  it("should never be under 0 quality", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });

  it("should never be over 50 quality", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeLessThanOrEqual(50);
  });
})

  describe("Aged Brie", function () {

  it("should only increase quality", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });

  it("should increase quality twice faster when sellIn below 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -4, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(2 + 2);
  });

  it("should never be over 50 quality", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    let items;
    for (let days = 1; days <= 5; days++) {
      items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  }});
})

  describe("Legendary Items", function () {

  it("should always be 80 quality for legendary items", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 800)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });
  });

  describe('Backstage pass', function(){
    it("should increase quality each day", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(10 + 1);
    });
  
    it("should never be over 50 quality", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)]);
      let items;
      for (let days = 1; days <= 5; days++) {
        items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    }});
  
    it("should increase 2 quality when 10 days or less left", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
      for (let days = 1; days <= 5; days++) {
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(10 + 2 * days);
      }
    });
  
    it("should increase 3 quality when 5 days or less left", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
      for (let days = 1; days <= 5; days++) {
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(10 + 3 * days);
      }
    });
  
    it("should lower Backstage pass quality to 0 when sellIn reaches 0", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0)
    });
  });