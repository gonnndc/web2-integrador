import express from 'express';
import { join } from 'path';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js';
//import { connection } from './models/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(express.static('public'));

// View engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.listen(3000, function(){
  console.log(`Server started on port 3000`);
})