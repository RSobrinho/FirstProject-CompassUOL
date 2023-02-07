import { config } from 'dotenv'
config()

import app from './../app/app'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})