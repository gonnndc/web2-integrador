import Database from "better-sqlite3";
import { totalAmountPurchase } from "../util/totalAmountPurchase.js";

export async function savePurchase(purchasedProducts){
    try {
        const db = new Database('./index.db')
        const insertPurchaseQuery = `INSERT INTO purchase (updated, created, total_amount) VALUES (?, ?, ?)`
        const currentDate = new Date().toISOString();
        const totalAmount = totalAmountPurchase(purchasedProducts)
        const purchaseSaved = db.prepare(insertPurchaseQuery).run(currentDate, currentDate, totalAmount);
        const {lastInsertRowid} = purchaseSaved;

        const insertPurchasedProducts = db.prepare(`
        INSERT INTO purchase_product (product_id, purchase_id, quantity_product)
        VALUES (?, ?, ?)
        `)

        purchasedProducts.forEach((prod) => {
            insertPurchasedProducts.run(
                prod.productId,
                lastInsertRowid,
                prod.productQuantity,
            )
        });
        
        db.close();
        return {idPurchase:lastInsertRowid};
    } catch(e){
        console.log(e);
    }
}

export async function historialPurchases(){
    try {
        const db = new Database('./index.db')
        
        const query = `
        SELECT 
        product.id AS product_id,
        product.title AS product_title,
        product.image AS product_image,
        product.priceWithDiscount AS product_price_with_discount,
        purchase.id AS purchase_id,
        purchase.updated AS purchase_updated,
        purchase.created AS purchase_created,
        purchase.total_amount AS purchase_total_amount,
        purchase_product.quantity_product AS purchase_product_quantity
        FROM 
            product
        JOIN 
            purchase_product ON product.id = purchase_product.product_id
        JOIN 
            purchase ON purchase_product.purchase_id = purchase.id;
        `

        const result = db.prepare(query).all();
        
        db.close();
        return {result};
    } catch(e){
        console.log(e);
    }
}

