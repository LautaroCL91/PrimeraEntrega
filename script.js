
let nombre =prompt("Ingrese su nombre");
console.log(nombre);
let edad =prompt("Ingrese su edad");
console.log(edad);
let estatura =prompt("Ingrese su estatura");
console.log(estatura);
let cumpleRequisito = false;

while(!cumpleRequisito){
  
if(edad >=15 && estatura >= 1.50){  
    alert(nombre + ", cumplis con ambos requisitos para poder entrar a la montaña rusa del increible hulk")
    cumpleRequisito=true
}
else{
    alert(nombre + ", lo lamentamos pero usted no cumple con una de las dos condiciones solicitadas")
    nombre =prompt("Ingrese su nombre");
    console.log(nombre);
    edad =prompt("Ingrese su edad");
    console.log(edad);
    estatura =prompt("Ingrese su estatura");
    console.log(estatura);
    
}
}