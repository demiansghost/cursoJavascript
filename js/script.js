$.ajax({
    type: "get",
    url: "https://digimon-api.vercel.app/api/digimon",
    dataType: "json",
    success: function (response) {
       inicio(response);
    }
    
    
});
function inicio (response){
    const principal = document.getElementById("principal");
    for(var i=0;i<response.length;i++){

        principal.innerHTML += ' <div class="col">  <a href="#seccion2"><div class="card"  id="'+[i]+'" ><img src="'+response[i].img+'" class="card-img-top"><div class="card-body"> <h5 class="card-title">'+response[i].name +'</h5><p class="card-text">'+response[i].level +'</p>  </div>  </div> </a></div>';
        console.log(response[i])
        };
        //agregar evento a cada uno
        var cartas = document.querySelectorAll(".card");
        cartas.forEach((carta)=>{
             carta.addEventListener('click',function(){
                var identificador = response[this.id];
                crearDetalle(identificador);
                carta.setAttribute('a','');
                
             });
        } );
};
function crearDetalle (identificador){
    var seccion2 = document.getElementById('seccion2');
    seccion2.style.display="block";
    seccion2.innerHTML += '<div class="card mb-3" id="cartaDetalle"><img src="'+identificador.img +'" class="card-img-top" alt="imagen de '+ identificador.name+'"><div class="card-body2"><h5 class="card-title" class="textCarta">'+identificador.name+'</h5>  <p class="card-text2">'+identificador.level +'</p><div> <a href="#principal"><button type="button" onclick= "limpiar()">Volver</button></a></div>';

}
function limpiar (){
    var seccion2 = document.querySelector('#seccion2');
    seccion2.innerHTML="";
};
/*
   principal.innerHTML = ' <div class="col">  <div class="card"><img src="https://digimon-api.vercel.app/api/digimon/img/'+=response[i].img +='" class="card-img-top" alt="..."><div class="card-body"> <h5 class="card-title">Card title</h5><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>  </div>  </div></div>'  ;

    principal.innerHTML += ' <div class="col">  <div class="card"><img src="https://digimon-api.vercel.app/api/digimon/img/'+=response[i].img +='" class="card-img-top" alt="..."><div class="card-body"> <h5 class="card-title">Card title</h5><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>  </div>  </div></div>'  ;


    
*/ 
            
       
           // principal.innerHTML += "<p>hola"+response[i].name+"</p><br>";
            //console.log(response);
          //  const list = document.getElementById("list");
        //list.innerHTML += `<li><a href="#">Item ${response[i].name}</a></li>`;
        //principal.innerHTML += "<p>" +response[i].name +"</p>";
    