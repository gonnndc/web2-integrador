import { allProducts } from "../services/productsServices.js";
import { joinCategories} from "../util/joinCategories.js";
import { savePurchase as sp, historialPurchases as hp } from "../services/purchasesServices.js";
import { purchasesGrouped } from "../util/purchasesGrouped.js";

export async function savePurchase(req, res){

    const productsPurchased = req.body;
    await sp(productsPurchased)
    
    const products = await allProducts()
    const categories = joinCategories(products)

    return res.render('products', {products, categories});
}


export async function historialPurchases(req, res){

    const { result } = await hp()

    const purchasesHistory = purchasesGrouped(result)
    
    return res.render('historial', {purchasesHistory});
}
