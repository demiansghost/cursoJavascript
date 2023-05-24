var seccionPokemon = document.querySelector('#seccionPokemon');
var nombrePokemon = document.querySelector('#nombrePokemon');
var enviar = document.querySelector('#enviar');
enviar.addEventListener('click',function(){
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/"+nombrePokemon.value,
        dataType: "json",
        success: function (response) {
            console.log(response);
            graficar(response);
        }
    });
})

function graficar(response){
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: "Pokemon " + response.name
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: response.stats[0].stat.name,  y: response.stats[0].base_stat },
                { label: response.stats[1].stat.name, y: response.stats[1].base_stat  },
                { label: response.stats[2].stat.name, y: response.stats[2].base_stat  },
                { label: response.stats[3].stat.name,  y: response.stats[3].base_stat },
                { label: response.stats[4].stat.name, y: response.stats[4].base_stat  }
            ]
        }
        ]
    });
    chart.render();
}

