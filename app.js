const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const staticHtmlPath = (filename) => path.join(__dirname, `assets/${filename}.html`);

app.use(express.static("assets"));


app.use(bodyParser.json());

app.get('/', function(req, res){
    return res.sendFile(__dirname + "/assets/index.html");
});

app.get("/products", function(req, res){

    return res.status(200).sendFile(staticHtmlPath('products')); 
});

app.get("/api/products", function(req, res){
    return fs.readFile("./assets/products.json", function(err, data){
        if(err)
            throw err;

        var products = JSON.parse(data);
        if(req.query.category){
            products = products.filter(product => product.category == req.query.category);
        }

        return res.status(200).send(products);
    }); 
});

app.post("/api/reviews", function(req, res){
    return fs.readFile("./assets/reviews.json", function(err, data){
        if(err)
            throw err;

        var reviews = JSON.parse(data);
        reviews.push(req.body);
        console.log(req.body);
        fs.writeFileSync("./assets/reviews.json", JSON.stringify(reviews));
        return res.status(204).send();
    });
});

app.get("/api/users", function(req, res){
    return fs.readFile("./assets/users.json", function(err, data){
        if(err)
            throw err;

        var users = JSON.parse(data);
        return res.status(200).send(users);
    });
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listen at http://%s:%s", host, port);
});