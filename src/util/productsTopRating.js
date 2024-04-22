export function productsTopRating(products){

    products.sort( (a, b) => {
        return b.rating-a.rating
    })
    
    const [top1, top2, top3, _] = products

    return [top1, top2, top3]
}