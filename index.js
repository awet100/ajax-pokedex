// listen to the click event of the search btn
document.querySelector("#search-btn").addEventListener("click", ()=> {
    // search pokemon by id or name
    let inputValue = document.querySelector("#search-input").value;

    // get data from remote server to the corresponding input
    if (true) {
        fetch("https://pokeapi.co/api/v2/pokemon/"+inputValue)
            .then((response) => {
                return response.json();
            }).then((myData) => {
                console.log(myData); // test
                document.getElementById("pokémon-id").innerHTML = myData.id;
                document.getElementById("pokémon-img").setAttribute("src", myData.sprites.front_shiny);
                return myData.moves;
            }).then(movesData => {
                console.log(movesData); // test
                let fourMovesObject = movesData.slice(0, 4);
                console.log(fourMovesObject[0].move.url); // test
            for (let i = 0; i < fourMovesObject.length; i++) {
                fetch(fourMovesObject[i].move.url)
                    .then(respond => {
                        return respond.json();
                    }).then(myMove => {
                        console.log(myMove);
                })
            }

        })
        // new fetch

    }
})
