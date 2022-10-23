const fs = require('fs');


function calculateStockLevel(sku){
    let stockData = readDataFromJSON('stock.json');
    let transactionsData = readDataFromJSON('transactions.json');
    
    let startingLevel = stockData.find(stock => {return stock.sku === sku});
    if(!startingLevel){
      return{"message":"Stock not found!"}
    }
    let startingStock = startingLevel.stock;
    
    let transactions = transactionsData.filter(transaction => {return transaction.sku === sku});
    if(!transactions){
      return{"message":"Transactions not found!"}
    }
    
    let totalQty = 0;
    for(transaction of transactions){
      if(transaction.type == "order"){
        totalQty -= transaction.qty;
      }
      else if(transaction.type == "refund"){
        totalQty += transaction.qty;
      }
    }
    return {"sku": sku, "qty":startingStock += totalQty} 
}
    
function readDataFromJSON(filePath){
    let rawdata = fs.readFileSync(filePath);
    let records = JSON.parse(rawdata);
    return records;
}


const StockLevel = {
    "sku": "KED089097/68/099",
    "qty": 4914
}
test("Verification of Stock level", () => {
    var result = calculateStockLevel("KED089097/68/09")
    expect(result).toBe(StockLevel);
});