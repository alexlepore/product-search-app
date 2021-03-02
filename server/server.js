const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3001;
const products = require("./utils/products.json")

//NODE JS middleware settings
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//REST API ROUTE
app.post('/product', (req, res)=>{
    let productsArray = products.records;
    let userInput = req.body.id;
    let flag = false;
    let product;

    for(let i = 0; i < productsArray.length; i++){
        if(userInput === productsArray[i].id){
            product = productsArray[i];
            flag = true
        }
    }

    if(!flag){
        res.sendStatus(404)
    } else{
        res.json(product)
    }
    
})  

app.listen(port, ()=>{
    console.log(`Listening on: ${port}`);
})