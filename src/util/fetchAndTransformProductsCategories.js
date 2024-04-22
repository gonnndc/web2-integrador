import { addOffers } from "./addOffersAndRating.js";
import { textTranslate } from "./textTranslator.js";
import 'dotenv/config'


export async function fetchAndTransformProductsCategories(){
    
    const result = await fetch(process.env.BASE_URL)
    const products = await result.json()
    const productsModified = addOffers(await textTranslate(products))
    return {
        products: productsModified,
    }

}


