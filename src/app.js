
const express = require('express');
const path = require('path')
const app = express();
const fetch = require('node-fetch');
const { status } = require('express/lib/response');

app.disable('x-powered-by')


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('/phone', (req, res)=>{
    fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${req.query.search}`)
    .then(data=> data.json())
    .then (data => fetch(data.data.phones[0].detail))   
    .then(data=> data.json())
    .then(data => {
        res.json(data)

    })
    
})








const port = process.env.PORT||8000;
app.listen(port, ()=>{
    console.log(`the server is runnig in  ${port}`);
})
