const {Client} = require('pg')
const client = new Client(
    {
        host: "localhost",
        user : "postgres",
        port : 5432,
        password : "rootUser",
        database : "postgres"
    }
)

client.connect();
client.query('Select * from drivers', (err, result) => {
    if(!err)
    {
        console.log(result.rows);
    }
    else
    {
        console.log(err.message);
    }
    client.end;

})