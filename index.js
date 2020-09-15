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
                console.log(myData);
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
        fetch("https://pokeapi.co/api/v2/pokemon-species/"+inputValue)
            .then(respond => {
            return respond.json();
        }).then(myData => {
            return myData.evolves_from_species.url;
        }).then(url => {
            fetch(url).then(preEvolutionUrl => {
                return preEvolutionUrl.json();
            }).then(data => {
                let name = data.evolves_from_species.name;
                fetch("https://pokeapi.co/api/v2/pokemon/"+name)
                    .then((response) => {
                        return response.json();
                    }).then((myData) => {
                    console.log(myData);
                    document.getElementById("pre-pokémon-id").innerHTML = "Pokeman's Id: " + myData.id;
                    document.getElementById("pre-pokémon-img").setAttribute("src", myData.sprites.front_shiny);
                }).catch(error => {
                    alert("Enter another name")
                })

            })
        })
    }
})
