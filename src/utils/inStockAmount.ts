export const getProductStock = (stock:number)=>{
    let stockAmout=0;

    if(stock>=10)
        stockAmout=10;

    else stockAmout=stock;

    const stocks= Array.from(new Array(stockAmout), (value, index)=> stockAmout - index);

  return  stocks.reverse()
}