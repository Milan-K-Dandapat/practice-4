const express = require('express');
const app = express();

//middelware

const middleware = (req,res, next) => {
    console.log(`hello my middleware`);
    next(); 
}

app.get('/', (req, res) => {
    res.send(`Hello World from the server`);
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello about Milan kumar`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact World from the server`);
});

app.get('/signin', (req,res) => {
    res.send(`Hello Login World from the server`);
});

app.get('/signup', (req,res) => {
    res.send(`Hello Register World from the server`);
});

console.log('Milan kumar Dandapat')

app.listen(3000, () => {
    console.log(`Server is running at port no 3000`);
})