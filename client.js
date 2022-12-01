async function submitRaceResults()
{
    var seasonIndex = document.queryForm.seasons.value;
    var round = document.queryForm.round.value;
    var drivers = document.queryForm.drivers.value;
    var constructors = document.queryForm.constructors.value;
    var position = document.queryForm.position.value;
    var circuits = document.queryForm.circuits.value;

    theResponse = await fetch("http://localhost:4000/drivers/" + drivers+"/"+constructors+"/"+seasonIndex+"/"+round+"/"+position+"/"+circuits)
    var jsonData = await theResponse.json();

    var toAdd = "";
    var raceCount = 1

    jsonData.forEach(query => {
        let result =`   <div class="singleResult">
                            <h3><b>Race Result ${raceCount}: ${query.name} </b></h3>
                            <hr style="width:100%;text-align:center;">
                            <p>Driver: ${query.forename + " " + query.surname}</p>
                            <p>Nationality: ${query.nationality}</p>

                            <p>Number: ${query.number}</p>
                            <p>Grid: ${query.grid}</p>
                            <p>Finishing Position: ${query.position}</p>
                            <p>Time: ${query.time}</p>
                            <p>Laps: ${query.laps}</p>
                            <p>Fastest Lap: ${query.fastestlap}</p>
                            <p>Fastest Lap Time: ${query.fastestlaptime}</p>
                        </div>`
  
        toAdd += result; 
        raceCount++
    });

    if( toAdd=="" )
    {
        toAdd = `<div class="noResult"> <p><b>No Results.</b></p> </div>`
        alert( "No Results Found!" )
    } 
    let resultDiv = document.getElementById("queryResult");
    resultDiv.innerHTML = toAdd;
}
