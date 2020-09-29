const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json())

const users = ['zami', 'zamil', 'nasif', 'sonet', 'dip', 'dipu'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price: 10000});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;  // for reading ID
    const name = users[id]; 
    res.send({id, name});
    
    console.log(req.query);
    console.log(req.query.sort);
})

// post
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('listening to port 3000'));