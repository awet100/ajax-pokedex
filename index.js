// listen to the click event of the search btn
document.querySelector("#search-btn").addEventListener("click", ()=> {
    // search pokemon by id or name
    let inputValue = document.querySelector("#search-input").value;

    // get data from remote server to the corresponding input
    if (inputValue) {
        fetch("https://pokeapi.co/api/v2/pokemon/"+inputValue)
            .then((response) => {
                return response.json();
            }).then((myData) => {
                document.getElementById("pokémon-id").innerHTML = "Pokeman's Id: " + myData.id;
                document.getElementById("pokémon-img").setAttribute("src", myData.sprites.front_shiny);
                return myData.moves;
            }).then(movesData => {
                let fourMovesObject = movesData.slice(0, 4);
            for (let i = 0; i < fourMovesObject.length; i++) {
                fetch(fourMovesObject[i].move.url)
                    .then(respond => {
                        return respond.json();
                    }).then(myMove => {
                        document.getElementById("move"+i).innerHTML = myMove.name;
                })
            }

        })
        // new fetch
        fetch("https://pokeapi.co/api/v2/pokemon/"+inputValue)
            .then(respond => {
            return respond.json();
        }).then(myData => {
            return myData.species.url;
        }).then(evolutionUrl => {
            fetch(evolutionUrl)
                .then(respond => {
                    return respond.json();
            }).then(myData => {
                return myData.evolves_from_species.url;
            }).then(evolutionFromUrl => {
                fetch(evolutionFromUrl).then(evolutionDate => {
                    return evolutionDate.json();
                }).then(data => {
                    console.log(data);
                })
            })
        })
    }
})
