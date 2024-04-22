import Database from "better-sqlite3";

export async function allProducts(){
    try {
        const db = new Database('./index.db')
        const query = 'SELECT * FROM product';
        const products = db.prepare(query).all();
        db.close();
        return products;
    } catch(e){
        console.log(e);
    }
}

export function productsByCategory(category){
    try {
        const db = new Database('./index.db')
        const query = 'SELECT * FROM product WHERE category = ?';
        const productsByCategory = db.prepare(query).all(category);
        db.close();
        return productsByCategory;
    } catch(e){
        console.log(e);
    }
}
