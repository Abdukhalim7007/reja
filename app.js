console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err){
        console.log("ERROR:", err );
    }else{
        user = JSON.parse(data)
    }
});


// MONGOBD chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");
//1: Kirish codesss
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2 Session code
//3 View code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req,res) =>{
     console.log("user entered /creat-item");
    console.log(req.body);
    const new_reja = req.body.new_reja;
    db.collection("plans").insertOne({new_reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
        
    });
});

app.post("/delete-item", (req, res) => {
   const id = req.body.id;
   db.collection("plans").deleteOne(
        {_id:new mongodb.ObjectId(id) }, function(err, data) {
         res.json({state: "success"});
        }
    );
});

// app.get('/master', (req, res) => {
//     res.render("master", { user: user })
// });

app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data});
        }
    });
});

 

 module.exports = app;
