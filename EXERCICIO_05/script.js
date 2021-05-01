function loadpokemon(){

    fetch(`https://pokeapi.co/api/v2/pokemon/25`)
        .then((resp) => {
            return resp.json();
        })    
        .then((data) => {
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'];
            document.getElementById('numero').innerHTML = data['id'];
            let img = data['sprites'] ['front_default']
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((error) => {
            console.log("error: " + error);
        });

}

document.getElementById('btn_load').onclick = loadpokemon;



//fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments').then(resp => resp.json()).then(data => console.log(data))