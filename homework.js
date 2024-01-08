require('dotenv').config();
// accessing the environment variables
const apiKey = process.env.API_KEY;
const databaseUrl = process.env.DATABASE_URL;
// logging the data
console.log('API Key:', apiKey);
console.log('Database URL:', databaseUrl);