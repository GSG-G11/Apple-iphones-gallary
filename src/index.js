const app = require('./app')

const port = process.env.PORT||8000;
app.listen(port, ()=>{
console.log(`the server is running in ${port}`);
})