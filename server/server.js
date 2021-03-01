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

    if(userInput){
        for(let i = 0; i < productsArray.length; i++){
            if(userInput === productsArray[i].id){
                res.json(productsArray[i])
            } else{
                res.sendStatus(404)
            }
        }
    }
})  

app.listen(port, ()=>{
    console.log(`Listening on: ${port}`);
})