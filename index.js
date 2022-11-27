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
   
}).listen(3000);

console.log('it works');