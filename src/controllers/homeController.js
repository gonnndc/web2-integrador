import { orderForRating } from "../services/homeServices.js";
import { allProducts } from "../services/productsServices.js";

export async function getHome (req, res){
    
    const productsTopRating = orderForRating(await allProducts())
    

    res.render('home', {productsTopRating});
}