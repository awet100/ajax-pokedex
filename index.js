// listen to the click event of the search btn
document.querySelector("#search-btn").addEventListener("click", ()=> {
    // search pokemon by id or name
    let inputValue = document.querySelector("#search-input").value;

    // get data from remote server to the corresponding input
    if (true) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then((response) => {
                return response.json();
            }).then((myJson) => {
                console.log(myJson);
                document.querySelector("#pokémon-id").innerHTML = `${myJson.id}`;
                document.querySelector("#pokémon-img").setAttribute("src", `${myJson.sprites.front_shiny}`);

        }).catch(error => {
            console.log(error);
        })
    }
})
