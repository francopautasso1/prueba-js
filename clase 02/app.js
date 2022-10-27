//CONDICIONALES



//const condicion = true
//if(condicion){
    //codigo a ejecutar si es verdadera
//    console.log("Hola mundo")
//}

// let usuario = prompt("ingrese su nombre")

//console.log(alumno  == "franco pautasso")

// if (usuario == "franco"){
//     alert("bienvenido profesor!")
// } else if (usuario == "luna") {
//     alert("bienvenido tutora")
// } else if (usuario == "carlos"){
//     alert("bienvenido coordinador")
// }
//  else {
//     alert("bienvenido alumno")
// }


let temperatura = 1

// if(temperatura >= 30){
//     alert("hace calor")
// } else if (temperatura >=15){
//     alert("esta lindo")
// }else {
//     alert("hace frio")
// }

// console.log(20 == "20")
// console.log(20 === "20")

let myVar = NaN
// console.log(myVar)

// console.log(typeof 20)
// console.log(typeof "20")
// console.log(typeof true)
// console.log(typeof null)



// let usuario = prompt("ingrese su nombre")
// if (usuario !== "franco"){
//     alert("acceso denegado")
// }else{
//     alert("bienvenido")
// }

// let user = prompt("ingrese usuario")
// let pass = Number(prompt("ingrese la contraseña"))
// let palabraMagica = prompt("ingrese la palabra magica")



// if(user === "franco"){
    
//if(pass === 1234) {
//         alert("bienvenido usuario")
//     }else{
//         alert("password incorrecto")
//     }
// }else{
//     alert("usuario incorrecto")
// }




// if (user === "franco" && pass === 1234){
//     alert("bienvenido usuario")
// }else{
//     alert("acceso denegado")
// }



// if ((user === "franco" || pass === 1234) || palabraMagica === "coder"){
//     alert ("bienvenido usuario")
// }else{
//     alert("acceso denegado")
// }




// let nombre = prompt("ingrese su nombre")



// let nombre = prompt("ingrese su nombre").toLowerCase()


// if (nombre === "franco"){
//     alert("bienvenido alumno")
// }

// console.log( nombre )
// console.log( nombre.length )
// console.log( nombre.toUpperCase() )
// console.log( nombre.toLowerCase() )


// if (nombre === "franco" ){
//     alert("bienvenido alumno")
// }



//ejercicio

let estudiante = prompt("ingrese el nombre del estudiante")

let nota1 = Number(prompt("ingrese la nota 1"))
let nota2 = Number(prompt("ingrese la nota 2"))
let nota3 = Number(prompt("ingrese la nota 3"))

if (estudiante.length > 3 
    && nota1 >=0
    && nota1 <=10
    && nota2 >=0
    && nota2 <=10
    && nota3 >=0
    && nota3 <=10) { 

    let promedio = (nota1 + nota2 + nota3) / 3

    if( promedio>=7){
        alert("El estudiante: " + estudiante +  " aprobo con un promedio de: " + promedio)
    }else{
        alert("El estudiante: "+ estudiante + " reprobo con promedio de: " + promedio)
    }

}else {
    alert("los datos ingresados no son correctos")
}










console.log("fin del programa")


