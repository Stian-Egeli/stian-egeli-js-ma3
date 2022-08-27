//API-Key 2c71ffe2f4004e31a6503d0d12fd525b

const resultsContainer = document.querySelector(".display");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2c71ffe2f4004e31a6503d0d12fd525b";

setTimeout (async function getData(){
    try{
        const response = await fetch(url)

        const result = await response.json();

        const detail = result.results;

        console.log(detail);

        resultsContainer.innerHTML = "";

        for(let i = 0; i < 8; i++){
            if (i === 8){
                break;
            }
            resultsContainer.innerHTML += `<div>Name: ${detail[i].name}      Rating: ${detail[i].rating}     Number Of Tags: ${detail[i].tags.length}</div>`
        }


    } catch (error){
        console.log(error);
        resultsContainer.innerHTML = "There was an Error!"
    }
}, 2000);

getData();

