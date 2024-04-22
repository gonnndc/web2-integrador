export function addOffers(products) {
    const someProductsWithOffers = products.map( prod => {
        
        let withOffer = randomBoolean() ? 1 : 0
        let offerPercentaje = (withOffer == 1 ? (Math.random() * (60 - 10) + 10).toFixed(2) : 0).toString()
        let discountedAmount = (withOffer == 1 ? (parseInt(prod.price) * (parseInt(offerPercentaje)/100)).toFixed(2) : 0).toString()
        let priceWithDiscount = withOffer == 1 ? (parseInt(prod.price) - parseInt(discountedAmount)).toString() : prod.price
        let randomRating = (Math.random() * 4 + 1).toFixed(2);

        return { 
                ...prod,
                withOffer,
                offerPercentaje,
                discountedAmount,
                priceWithDiscount,
                randomRating
            }
    })

    return someProductsWithOffers
}

const randomBoolean = () => Math.random() > 0.6
