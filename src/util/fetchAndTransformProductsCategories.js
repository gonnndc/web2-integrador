import { addOffers } from "./addOffers.js";
import { joinCategories } from "./joinCategories.js";
import { textTranslate } from "./textTranslator.js";
import 'dotenv/config'


export async function fetchAndTransformProductsCategories(){
    
    const result = await fetch(process.env.BASE_URL)
    const products = await result.json()
    const productsModified = addOffers(await textTranslate(products))

    return {
        products: productsModified,
        categories: joinCategories(productsModified)
    }

}


