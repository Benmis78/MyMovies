const express = require('express')
const app = express()
const port = 3000
const register = require("./routes/register.js");


app.use("/register", register);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})