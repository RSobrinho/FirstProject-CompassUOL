import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
const DB = (process.env.DB_CONNECTION)

if(typeof DB === 'string') {
  mongoose.set('strictQuery', false)
  mongoose.connect(DB).then(() => console.log('DB connection established'))
} else {
  console.log('DB connection not established');
}

import app from './../app/app'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`);  
})