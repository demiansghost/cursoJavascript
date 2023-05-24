var seccionPokemon = document.querySelector('#seccionPokemon');
var nombrePokemon = document.querySelector('#nombrePokemon');
var enviar = document.querySelector('#enviar');
enviar.addEventListener('click',function(){
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
})
