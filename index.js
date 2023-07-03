const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sate@1234",
  database: "foodcart",
});

// Login endpoint
app.post("/login", (req, res) => {
  const q = "SELECT * FROM user WHERE username = ? AND password = ? ";

  connection.query(q, [req.body.username,req.body.password], (err, data) => {
    if(err)
    {
       return res.json({err : err})
    }
    if (data.length >0){
        return res.json({ message : "login successfully",data});
    } else{
        return res.json({ message :"Please enter valid username and password"});

    }
    
   
  });
});

//Foodlist endpoint

app.get('/foodlist', (req, res) => {
   const q = "SELECT * FROM food";
   connection.query(q,(err,data) =>{
    if(err) return res.json({err : err})
    return res.json(data);
   })

  });

 

// FoodDetails endpoint
app.get('/fooddetails/:id', (req, res) => {
  const foodId = req.params.id;
  const q = "SELECT * FROM food WHERE id = ? ";

  connection.query(q,[foodId] ,(err, data) => {
    if (err) return res.json({ err: err });
    return res.json(data);
   

  });
});

app.listen(3001, () => {
  console.log("server running");
});

