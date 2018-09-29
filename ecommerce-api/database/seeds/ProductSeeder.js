'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const fs = require("fs");

const productsJson = JSON.parse(fs.readFileSync("./database/seeds/data/products.json"));
const Product = use("App/Models/Product");

class ProductSeeder {
  async run () {
    await Product.query().delete();
    await Product.createMany(productsJson);
  }
}

module.exports = ProductSeeder
