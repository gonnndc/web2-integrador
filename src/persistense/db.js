import Database from 'better-sqlite3'

export async function createDatebaseAndInsertProducts(products) {
    const db = new Database('index.db')
    const query = `CREATE TABLE IF NOT EXISTS product (
        id INTEGER PRIMARY KEY, 
        title STRING NOT NULL,
        price STRING NOT NULL,
        category STRING NOT NULL,
        rating STRING NOT NULL,
        description STRING NOT NULL,
        image STRING NOT NULL,
        withOffer INTEGER NOT NULL,
        offerPercentaje STRING NOT NULL,
        discountedAmount STRING NOT NULL,
        priceWithDiscount STRING NOT NULL
    );

    CREATE TABLE IF NOT EXISTS purchase (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        updated TIME NOT NULL,
        created TIME NOT NULL,
        total_amount INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS purchase_product (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        product_id INTEGER REFERENCES product(id),
        purchase_id INTEGER REFERENCES purchase(id),
        quantity_product INTEGER NOT NULL
    );


`
    db.exec(query)


    const insertProducts = db.prepare(`
    INSERT INTO product (id, title, price, category, rating, description, image, withOffer, offerPercentaje, discountedAmount, priceWithDiscount)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    products.forEach(({ id, title, price, category, randomRating, description, image, withOffer, offerPercentaje, discountedAmount, priceWithDiscount }) => {
        insertProducts.run(
            id,
            title,
            price,
            category,
            randomRating,
            description,
            image, 
            withOffer,
            offerPercentaje,
            discountedAmount,
            priceWithDiscount
        )
    });

    db.close()
}
