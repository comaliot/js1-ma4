const gamesUrl = "https://api.rawg.io/api/games";

function createGames(response) {
    return response.json();
}

function handleJson(json) {
    console.dir(json);
}

function handleError(error) {
    console.log(error);
}

fetch(gamesUrl)
    .then(createGames)
    .then(handleJson)
    .catch(handleError);

function handleJson(json) {

    const results = json.results;
    
    results.forEach(function(result) {
        console.log(result.name);
    });
    
    const resultsContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(result) {
        html += `<div class="game">
                    <h2>${result.name}</h2>
                    <img src="${result.image}" alt="${result.name}">
                </div>`;
    });

    resultsContainer.innerHTML = html;
}

