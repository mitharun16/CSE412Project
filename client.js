async function submitRaceResults()
{
    var type = "results"; //document.queryForm.type.value;
    var seasonIndex = document.queryForm.seasons.value;
    var round = document.queryForm.round.value;
    var drivers = document.queryForm.drivers.value;
    var constructors = document.queryForm.constructors.value;
    var grid = 0 //document.queryForm.grid.value;
    var position = document.queryForm.position.value;
    var fastest = 0 //document.queryForm.fastest.value;  
    var circuits = document.queryForm.circuits.value;
    var status = document.queryForm.status.value;

    theResponse = await fetch("http://localhost:4000/drivers/" + drivers+"/"+constructors)
    var jsonData = await theResponse.json();

    // alert( constructors )
    console.log( jsonData )



    var toAdd = "";
    var raceCount = 1

    // toAdd = `<div>
    //          <h3>Driver: ${jsonData[0].query.forename + query.surname}</h3>
    //          <h3>Nationality: ${jsonData[0].query.nationality}</h3>
    //          </div>`

    jsonData.forEach(query => {
        let result =`   <div>
                            <h3><b>Race Result ${raceCount}</b></h3>
                            <p>Driver: ${query.forename + " " + query.surname}</p>
                            <p>Nationality: ${query.nationality}</p>

                            <p>Number: ${query.number}</p>
                            <p>Grid: ${query.grid}</p>
                            <p>Position: ${query.position}</p>
                            <p>Time: ${query.time}</p>
                            <p>Laps: ${query.laps}</p>
                            <p>Fastest Lap: ${query.fastestlap}</p>
                            <p>Fastest Lap Time: ${query.fastestlaptime}</p>
                            <p>Laps: ${query.laps}</p>
                            <p>Laps: ${query.laps}</p>
                        </div>`
  
        toAdd += result; 
        raceCount++
    });

    if( toAdd == "" )
    {
        toAdd = `<p>No Results.</p>`
    } else {
        let resultDiv = document.getElementById("queryResult");
        resultDiv.innerHTML = toAdd;
    }


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