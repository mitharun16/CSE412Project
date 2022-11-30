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
    console.log("server has started on 4000")
})

console.log('it works');