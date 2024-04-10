import { fetchAndTransformProductsCategories } from "../util/fetchAndTransformProductsCategories.js";
import { lowerFirstLetter } from "../util/joinCategories.js";

const {products, categories} = await fetchAndTransformProductsCategories()

export async function getAllProducts (req, res){
    return res.render('products', {products, categories});
}

export async function getProductByCategory (req, res){
  let category = req.params.category.replaceAll("-", " ")
  category = category.replaceAll("%20", " ")

  const productsByCategory = products.filter(prod => prod.category == lowerFirstLetter(category))


  if (productsByCategory.length < 1) {
    return res.render('notfound', {products, categories})
  };
  return res.render('products', {products:productsByCategory, categories});
}

export function getProduct(req, res){
    // findById(req.params.id, function(err, product){
    //   return res.render('details', {
    //     product: product
    //   });
    // });
}