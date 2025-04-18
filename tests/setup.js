require('dotenv').config();

const { 
  buildTables,
  createInitialRestaurants,
  createInitialUsers,
  createInitialReviews
} = require("../db/seed_db");

const setup = async () => {
  console.log("--- JEST SETUP ---");
  await buildTables();
  await createInitialUsers();
  await createInitialRestaurants();
  await createInitialReviews();
}

module.exports = setup;