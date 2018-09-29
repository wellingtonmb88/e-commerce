"use strict";

const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("price").notNullable();
      table.text("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
