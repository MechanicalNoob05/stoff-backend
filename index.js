const express = require('express')
var cors = require('cors')
const app = express()

// Connect the database
const db = require('./db.js')
db();

// Port number is assigned
const port = 3001
app.use(cors())


// route for test
app.use('/',require('./routes/test'))

// routes for the user 
app.use('/app/login',require('./routes/get/Login'))
app.use('/app/signup',require('./routes/create/Signup'))
app.use('/app/deleteuser',require('./routes/delete/deleteaccount'))
app.use('/app/updateuser',require('./routes/update/updateuser'))

app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})