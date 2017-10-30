const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
})

app.get('/users', (req, res) =>{
    res.status(200).send([
        {name: 'Steve', age: 48}, 
        {name: 'Lola', age: 47}, 
        {name: 'Sofia', age: 13}, 
        {name: 'Lewis', age:10}
    ]);
})

app.listen(3000);

module.exports.app = app;
