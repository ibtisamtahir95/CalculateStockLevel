const stockData = require("../models/stock.json")
const transactionsData = require("../models/transactions.json")

const calculateStockLevel = async (sku) => {
    let startingLevel = stockData.find(stock => {return stock.sku === sku});
    if(!startingLevel) {
        return {"message":"Stock not found!"}
    }
    let startingStock = startingLevel.stock;

    let transactions = transactionsData.filter(transaction => {return transaction.sku === sku});
    if(!transactions) {
        return {"message":"Transactions not found!"}
    }

    let totalQty = 0;
    for(let transaction of transactions) {
        if(transaction.type == "order") {
            totalQty -= transaction.qty;
        }
        else if(transaction.type == "refund") {
            totalQty += transaction.qty;
        }
    }
    return {"sku": sku, "qty":startingStock += totalQty} 
}


module.exports = {
    calculateStockLevel
  };
  