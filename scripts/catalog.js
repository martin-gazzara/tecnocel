// Modificar cada *** cuando se crea un nuevo rubro 


let articulos = document.getElementsByClassName("rubro");
const catalog = document.getElementById("catalog");
const rubros = document.getElementById("rubros");
const volver = document.getElementById("volver");

const catalog_content = document.getElementById("catalog").innerHTML;



function addListener(){

    for (let i = 0; i < articulos.length; i++){
        
        articulos[i].onclick = function(e){seleccion(e.target.id)};
        

    }

}

volver.onclick = function(){


}

function seleccion(id){

}

// Pone a la escucha cada rubro.

addListener();



