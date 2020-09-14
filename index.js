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
                let moveUrl = myJson.moves[0].move.url;
                fetch(`${moveUrl}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        console.log(myJson);
                        let moveOne = myJson.contest_effect.url;
                        let moveTwo = myJson.contest_effect.url;
                        fetch(`${moveOne}`)
                            .then((response) => {
                                return response.json();
                            })
                            .then((myJson) => {
                                console.log(myJson);
                                document.getElementById("move").innerHTML = `${myJson.effect_entries[0].effect}`
                            });
                });
        }).catch(error => {
            console.log(error);
        })
    }
})
