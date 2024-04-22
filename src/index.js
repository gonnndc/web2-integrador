import express from 'express';
import { join } from 'path';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';
import purchasesRouter from './routes/purchasesRouter.js'
import homeRouter from './routes/homeRouter.js'

import path from 'path';
import { fileURLToPath } from 'url';
import { createDatebaseAndInsertProducts} from './persistense/db.js';

import fs from 'node:fs'
import { fetchAndTransformProductsCategories } from './util/fetchAndTransformProductsCategories.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();

app.use(express.static('public'));

// View engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use('/', homeRouter)
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/purchases', purchasesRouter);


app.listen(3000, async function(){
  try {
      fs.access('./index.db', fs.constants.F_OK, (err) => {
          if (err) {
              console.error('El archivo no existe o no se puede acceder:', err);
          } else {
              fs.unlink('./index.db', (err) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log("Se borró con exito");
            })
          }
      });
  } catch (err) {
      console.error('Se produjo un error:', err);
  }

  const {products} = await fetchAndTransformProductsCategories()
  createDatebaseAndInsertProducts(products)
  console.log(`Server started on http://localhost:3000/products`);
})