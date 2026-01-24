const express = require('express');

const app = express(); // server creation ho chuka hai

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.send("About Us Page")
})

app.get('/contact', (req, res) => {
    res.send("Contact Us Page")
})

app.listen(3000) // server ko start krta hai

