const gameDetailsUrl = "https://api.rawg.io/api/games/4200";

function createGameDetails(response) {
    return response.json();
}

function handleJson(json) {
    console.dir(json);
}

function handleError(error) {
    console.log(error);
}

fetch(gameDetailsUrl)
    .then(createGameDetails)
    .then(handleJson)
    .catch(handleError);

function createGameDetails(json) {
    console.dir(json);

    const image = document.querySelector(".creator-image");
    // image.src = json.image;
    // image.alt = json.name;

    const name = document.querySelector(".container.h1");
    name.innerHTML = json.name;

    const description = document.querySelector(".container.description");
    description.innerHTML = json.description;
}