const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`You are listening on port ${PORT}`)
})