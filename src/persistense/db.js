import Database from 'better-sqlite3'
const db = new Database('app.db')

const query = `
    CREATE TABLE products (
        id INTEGER PRIMARY KEY, 
        title STRING NOT NULL,
        price STRING NOT NULL,
        category STRING NOT NULL,
        description STRING NOT NULL,
        image STRING NOT NULL,
        withOffer INTEGER NOT NULL,
        offerPercentaje STRING NOT NULL,
        discountedAmount STRING NOT NULL,
        priceWithDiscount STRING NOT NULL
    )

`


// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// },