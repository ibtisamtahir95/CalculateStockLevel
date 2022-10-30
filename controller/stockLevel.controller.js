
const { stockLevelService } = require('../services');

const getStockLevel = async (req, res) => {
    const {sku} = req.query;
    const result = await stockLevelService.calculateStockLevel(sku);
    res.send(result);
  };


module.exports = {
    getStockLevel
}