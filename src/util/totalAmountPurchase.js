export function totalAmountPurchase(purchasedProducts){

    const totalAmount = purchasedProducts.reduce((acc, curr) =>{
        return(acc + (parseInt(curr.productPrice) * parseInt(curr.productQuantity)))
    }, 0)
    
    return totalAmount
}