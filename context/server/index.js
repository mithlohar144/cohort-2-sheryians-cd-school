const express  = require('express');

const app = express();

app.get('/', (req, res) => {
    const dummy = [
        {
            username: 'Sumit ',
            city:'Bangalore',
            age: 26
        }
    ]
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173').json({data: dummy});
});


app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});