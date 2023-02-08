import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
const DB = (process.env.DB_CONNECTION)

if(typeof DB === 'string') {
  mongoose.set('strictQuery', false)
  mongoose.connect(DB).then((con) => console.log('DB connection established'))
} else {
  console.log('ele ta undefined');
}

import app from './../app/app'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`);  
})