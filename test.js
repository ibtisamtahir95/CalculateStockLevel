const {calculateStockLevel} = require('./services/stockLevel.service');
const assert = require('chai').assert;
const res = {
    "sku": "LTV719449/39/39",
    "qty": 8510
}
describe('Testing the getStockLevel Function', async function() {
    it('should complete this test', async () => {
        await Promise.resolve();
        let stockLevel = await calculateStockLevel("LTV719449/39/39");
        console.log(stockLevel)
        assert.ok(stockLevel.qty == res.qty);
    });

});