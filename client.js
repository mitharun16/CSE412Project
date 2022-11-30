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


async function submitRaceResults()
{
    var type = "results"; //document.queryForm.type.value;
    var seasonIndex = document.queryForm.seasons.selectedIndex;
    var round = document.queryForm.round.value;
    var drivers = document.queryForm.drivers.value;
    var constructors = document.queryForm.constructors.value;
    var grid = 0 //document.queryForm.grid.value;
    var position = document.queryForm.position.value;
    var fastest = 0 //document.queryForm.fastest.value;  
    var circuits = document.queryForm.circuits.value;
    var status = document.queryForm.status.value;

    theResponse = await fetch("http://localhost:4000/drivers")
    var jsonData = await theResponse.json();

    alert( "look at console" )
    console.log( jsonData )
}

function onChangeSeason() 
{
    var maxRound = document.queryForm.seasons.value;

    if( maxRound == "current" )
    {
        maxRound = document.queryForm.seasons.options[2].value;
    }

    var selected = document.queryForm.round.selectedIndex;

    document.queryForm.round.options.length = 3;

    if( maxRound == 0 ) 
    {
      document.queryForm.round.disabled = true;
    } 
    else 
    {
      if( selected > maxRound ) selected = maxRound;

      for( var i=1; i <= maxRound; i++ ) 
      {
        option = new Option(i, i, false, false);
        document.queryForm.round.options[i+2] = option;
      }

      document.queryForm.round.selectedIndex = selected;
      document.queryForm.round.disabled = false;
    }
  }

function test()
{
    alert("sss")
}