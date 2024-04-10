import { Schema, model } from 'mongoose';

// Product schema
const productSchema = Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Product = module.exports = model('Product', productSchema);