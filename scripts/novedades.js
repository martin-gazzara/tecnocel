let place = document.getElementById("novedades");
let index = 0;


const img = [
    "images/novedades/auriculares-bluetooth.jpg",
    "images/novedades/cases-diseno.jpg",
    "images/novedades/manos-libres.jpg",
    "images/novedades/soportes.jpg"
],
 
      l_button = document.getElementById("left"),
      r_button = document.getElementById("right");

      place.innerHTML = "<img src='" + img[index] + "'/>";

l_button.onclick = function (){
    if (index > 0){
        index--;
        place.innerHTML = "<img src='" + img[index] + "'/>";
    }
}

r_button.onclick = function (){
    if (index < img.length-1){
        index++;
        place.innerHTML = "<img src='" + img[index] + "'/>";
    }
}
