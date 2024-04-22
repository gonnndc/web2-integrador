import { allProducts } from "../services/productsServices.js";
import { joinCategories, lowerFirstLetter } from "../util/joinCategories.js";
import { savePurchase as sp } from "../services/purchasesServices.js";

export async function savePurchase(req, res){
    const { productsPurchased } = req.body

    await sp(productsPurchased)
    
    const products = await allProducts()
    const categories = joinCategories(products)

    return res.render('products', {products, categories});
}
