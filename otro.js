function numeroAleaorio(size){
    return  Math.floor(Math.random()* size);
}
 
let getdistancia =(evento, target) =>{
    let diffX = evento.offsetX -target.x;
    let diffY = evento.offsetY -target.y;
    return Math.sqrt((diffX*diffX) +(diffY*diffY))
}
let getdistanciahint =distancia=>{
    if (distancia <90){
        return " muy cerca 🔥";
    }else if (distancia <100)  {
        return "  cerca 🔥";
    }else if (distancia < 120){
        return " lejos 🧊";
    }else if  ( distancia < 140){
        return " muy lejos 🧊";  
    }else {
        return "congelado🥶"
    }
}

 