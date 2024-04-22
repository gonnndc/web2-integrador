import { allProducts } from "../services/productsServices.js";
import { joinCategories, lowerFirstLetter } from "../util/joinCategories.js";

export async function getAllProducts (req, res){
    const products =   await allProducts()
    const categories = joinCategories(products)

    return res.render('products', {products, categories});
}

export async function getProductByCategory (req, res){
  let category = req.params.category.replaceAll("-", " ")
  category = category.replaceAll("%20", " ")
  const products =   await allProducts()
  const productsByCategory = products.filter(prod => prod.category == lowerFirstLetter(category))

  const categories = joinCategories(products)

  if (productsByCategory.length < 1) {
    return res.render('notfound', {products, categories})
  };
  return res.render('products', {products:productsByCategory, categories});
}
