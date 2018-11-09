let place = document.getElementById("novedades");
let index = 0;


const img = [
    "images/test/1.jpg",
    "images/test/2.jpg"
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
