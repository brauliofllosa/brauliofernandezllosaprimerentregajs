console.log("conectado")

let = nombrecolocado = prompt("Coloque su nombre");
let = apellidocolocado = prompt("Coloque su apellido");//


if((nombrecolocado !="") && isNaN(nombrecolocado) && isNaN(apellidocolocado) && (apellidocolocado !="")){
  alert("Nombre: " + nombrecolocado + "Apellido: " + apellidocolocado);

}

else{
  alert ("Error: ingresar nombre y apellido")
}

let = edad = parseInt(prompt("ingrese su edad"));


if((edad === "18") || (edad >= "18")) {
  alert("Puede ingresar")
}

else{
  alert("El ingreso es para Mayores de 18");
}

let edadpersona = parseInt(prompt("ingrese su edad para verificar que tipo de persona es"));

if(edadpersona >= 70 && edadpersona != "" ){
    console.log("eres una persona mayor")
}
else if(edadpersona >=18 && edadpersona != ""){
    console.log("eres un adulto" )
}

else if(edadpersona <=17 && edadpersona != ""){
    console.log("eres un niño")
}

else {
    console.log("Debe ingresar su edad")
}

let suma = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Ingrese un número:"));
  suma += numero;
}

for (let j = 0; j < 5; j++) {
  console.log("La suma de los números ingresados es: " + suma);
}

function saludarUsuario() {
  alert("Hola, ¡bienvenido!");
}


saludarUsuario();