// Modificar cada *** cuando se crea un nuevo rubro 


let articulos = document.getElementsByClassName("rubro");
const catalog = document.getElementById("catalog");
const volver = document.getElementById("volver");

const catalog_content = document.getElementById("catalog").innerHTML;

function addListener(){

    for (let i = 0; i < articulos.length; i++){
        
        articulos[i].onclick = function(e){seleccion(e.target.id)};

    }

}

volver.onclick = function(){
    catalog.className = "show";
}

function seleccion(id){
    catalog.className = "hide";
}

// Pone a la escucha cada rubro.

addListener();



