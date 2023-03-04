//cambiar fondo
let cabecera = document.getElementsByTagName("header");
function dark(){
  cabecera[0].style.backgroundColor = '#000';   
  cabecera[0].classList.remove('ligero'); 
  document.body.style.backgroundColor = "#000";
  document.getElementById("evento").innerHTML = "Cambiaste al tema oscuro";
} 
//light
document.getElementById('capa2').addEventListener('click',light);
function light(){
cabecera[0].style.backgroundColor = '#39ff85bd';
cabecera[0].classList.add('ligero');
document.body.style.backgroundColor = "#39ff85bd"
document.getElementById("evento").innerHTML = "Cambiaste al tema nature";
}
document.getElementById('capa3').addEventListener('click', function (){defaulte()})
let defaulte = function(){
cabecera[0].style.backgroundColor = 'transparent';
document.body.style.backgroundColor = "#d9edfaa0"
cabecera[0].classList.remove('dark');
document.getElementById("evento").innerHTML = "Cambiaste al tema default";
}
  function activarSeccion(id,triangle) {
    var section = document.getElementById(id);
    var triangle = document.getElementById(triangle);
    if (section.style.display === "block") {
      section.style.display = "none";
      triangle.innerHTML = "▼";
    } else {
      section.style.display = "block";
      triangle.innerHTML = "▲";
    }
    document.getElementById("evento").innerHTML = "Abriste una categoría";
    
  }
  