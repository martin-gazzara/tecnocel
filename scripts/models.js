var modelos = document.querySelectorAll(".modelo");

function hover(e){
	e.target.className = "mod_hover";
}


function leave(e){
		e.target.className = "mod_leave";
}

function verModelo(e){
	 $('.venobox').venobox();
	 console.log("flag");
}

for (let i = 0; i < modelos.length; i++){
		modelos[i].addEventListener("mouseover",hover);
		modelos[i].addEventListener("mouseleave",leave);
		modelos[i].addEventListener("click",verModelo);
}