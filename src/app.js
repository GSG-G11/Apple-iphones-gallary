
const express = require('express');
const path = require('path')
const app = express();
const fetch = require('node-fetch');

app.disable('x-powered-by')


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('/phone', (req, res)=>{
    console.log(req.query.search);
    fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${req.query.search}`)
    .then(data=> data.json())
    .then(data => {
        console.log(data);
        res.json(data)
    })
    
    // .then(data => {g
    //     res.json({
    //         Image:data.data.phones[0].image,
    //         release_date:data.data.phones[0].detail.release_date,
    //         dimension:data.data.phones[0].detail.dimension,
    //         os:data.data.phones[0].detail.os,
    //         storage:data.data.phones[0].detail.storage
    //     })
    // })
    
})

// .then(data => res.json(data.data.phones[0].detail.release_date))
// .then(data => res.json(data.data.phones[0].detail.dimension))
// .then(data => res.json(data.data.phones[0].detail.os))
// .then(data => res.json(data.data.phones[0].detail.storage))








const port = process.env.PORT||3000;
app.listen(port, ()=>{
    console.log(`the server is runnig in  ${port}`);
})
