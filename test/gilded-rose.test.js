const { Shop, Item } = require("../src/gilded-rose");

const test = describe("Gilded Rose item", function () {

  it("should keep name", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("product name");
  });

});

export default test;