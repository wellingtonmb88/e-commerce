"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const fs = require("fs");

const usersJson = JSON.parse(fs.readFileSync("./database/seeds/data/users.json"));
const User = use("App/Models/User");

class UserSeeder {
  async run() {
    await User.query().delete();
    await User.createMany(usersJson);
  }
}

module.exports = UserSeeder;
