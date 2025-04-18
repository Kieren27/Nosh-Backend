require('dotenv').config(); // Load environment variables from .env
const { Client } = require('pg');

const DB_NAME = 'nosh_backend';

let client;

// GitHub Actions client config
if (process.env.CI) {
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  });
} else {
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.DB_PASSWORD, // Use the password from .env
    database: DB_NAME,
  });
}

module.exports = client;