import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './database.js';

async function main() {
  await connectDB();
  await app.listen(app.get('port'));
  console.log('Servidor en el puerto', app.get('port'));
}

main();

