export function joinCategories(products){
    const categories = []
    products.forEach(p => {
            if(!categories.includes(capitalizeFirstLetter(p.category))){
                categories.push(capitalizeFirstLetter(p.category))
            }
        }
    )
    return categories
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}