const  width = 400;
const  heigh = 400;
let target ={
    x: numeroAleaorio(width),
    y: numeroAleaorio(heigh)
};
let $mapa = document.getElementById("mapa");
let $distancia = document.getElementById("distancia");
let clicks=0;
$mapa.addEventListener("click", function (e){
  clicks++;
 let distancia =  getdistancia (e,target);
  let distanciahet= getdistanciahint  (distancia)
  $distancia.innerHTML = distanciahet;
   if(distancia <20){
     alert("has encontado el tesoro🎉");
   location.reload();
    }
});