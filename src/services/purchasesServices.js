import Database from "better-sqlite3";

export async function savePurchase(purchasedProducts){
    try {
        const db = new Database('./index.db')
        const insertPurchaseQuery = `INSERT INTO purchase (updated, created) VALUES (?, ?)`
        const currentDate = new Date().toISOString();
        const purchaseSaved = db.prepare(insertPurchaseQuery).run(currentDate, currentDate);
        const lastInsertIdPurchase = purchaseSaved.lastInsertRowid();

        const insertPurchasedProducts = db.prepare(`
        INSERT INTO purchase_product (product_id, purchase_id, quantity_product)
        VALUES (?, ?, ?)
        `)

        purchasedProducts.forEach((prod) => {
            insertPurchasedProducts.run(
                prod.id,
                lastInsertIdPurchase,
                prod.productQuantity
            )
        });
        
        db.close();
        return {idPurchase:lastInsertIdPurchase};
    } catch(e){
        console.log(e);
    }
}
