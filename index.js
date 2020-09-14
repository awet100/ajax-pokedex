// listen to the click event of the search btn
document.querySelector("#search-btn").addEventListener("click", ()=> {
    // search by id or name
    let inputValue = document.querySelector("#search-input");
    let inputArray = inputValue.split(" ");
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
})
