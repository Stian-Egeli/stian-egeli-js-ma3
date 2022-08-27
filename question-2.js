//API-Key 2c71ffe2f4004e31a6503d0d12fd525b

//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2c71ffe2f4004e31a6503d0d12fd525b

const resultsContainer = document.querySelector(".display");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2c71ffe2f4004e31a6503d0d12fd525b";

async function getData(){
    try{
        const response = await fetch(url)
        const result = await response.json();
        const detail = result.results;

        resultsContainer.innerHTML = " ";

        for(let i = 0; i < 8; i++){
            if (i === 8){
                break;
            }
            resultsContainer.innerHTML += `<div>${detail[i].name}</div>`
        }


    } catch (error){
        console.log(error);
    }
}

getData();

