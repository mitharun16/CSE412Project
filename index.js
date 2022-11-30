const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json());

// get all drivers
app.get("/drivers", async(req, res) => {
    try {
        const drivers = await pool.query("SELECT * FROM drivers"); 
        res.json(drivers.rows);
    } catch (err) {
        console.error(err.message);
    }
}) 

// get all drivers with certain team
app.get("/drivers/:name", async(req, res) => {
    try {
        const {name} = req.params;
        const drivers = await pool.query("SELECT * FROM drivers WHERE driverRef = $1", [name]); 
        res.json(drivers.rows);
    } catch (err) {
        console.error(err.message);
    }
}) 


// client.query('Select * from drivers', (err, result) => {
//     if(!err)
//     {
//         console.log(result.rows);
//     }
//     else
//     {
//         console.log(err.message);
//     }
//     client.end;

// })

app.listen(4000, () => {
    console.log("Server has started on 4000")
})

var http = require('http');
var fs = require('fs');
var url=require('url');


http.createServer(function(req, res){
    var q =url.parse(req.url,true);
    var filename="."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("Page not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    console.log('Website running on 3000');
   
}).listen(3000);
// open in http://localhost:3000/home.html

console.log('it works');