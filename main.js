// 1
function esMayor(num1, num2) {
    if(num1 > num2) {
        console.log("El primero es mayor que el segundo")
    } else {
        console.log("El segundo es mayor o igual que el primero")
    }
}
//esMayor(10, 6)
//esMayor(5, 8)

// 2
function sonIguales(num1, num2) {
    if(num1 === num2) {
        console.log("Los numeros son iguales")
    } else {
        console.log("Los numeros son distintos")
    }
}
//sonIguales(1, 1)
//sonIguales(3, 4)

// 3
function sonIgualesOMasGrandes(num1, num2) {
    if(num1 === num2) {
        console.log("Son iguales")
    } else if(num1 > num2) {
        console.log(`${num1} es más grande`)
    } else {
        console.log(`${num2} es más grande`)
    }
}
//sonIgualesOMasGrandes(1, 1)
//sonIgualesOMasGrandes(3, 6)
//sonIgualesOMasGrandes(5, 2)

// 4
function esElMasChico(num1, num2, num3) {
    if(num1 < num2 && num1 < num3) {
        console.log("El más chico es: " + num1)
    } else if(num2 < num1 && num2 < num3) {
        console.log("El más chico es: " + num2)
    } else {
        console.log("El más chico es: " + num3)
    }
}
//esElMasChico(1, 2, 3)
//esElMasChico(5, 0, 9)
//esElMasChico(7, 5, 2)

// 5
let abuelo = {
    nombre: "Juan",
    edad: 80,
    altura: 170
}
let nieto = {
    nombre: "Alex",
    edad: 23,
    altura: 180
}

function mejorPersona(persona1, persona2) {
    if(persona1.altura > persona2.altura) {
        console.log("El más alto es: " + persona1.nombre)
    } 
    if(persona2.altura > persona1.altura) {
        console.log("El más alto es: " + persona2.nombre)
    } 
    if(persona1.edad > persona2.edad) {
        console.log("El más viejo es: " + persona1.nombre)
    } 
    if(persona2.edad > persona1.edad) {
        console.log("El más viejo es: " + persona2.nombre)
    }
}
//mejorPersona(abuelo, nieto)

// 6
//let nombreIngresado = prompt("Ingresa tu nombre");
//let edadIngresada = Number(prompt("Ingresa tu edad"));
//let alturaIngresada = Number(prompt("Ingresa tu altura"));
//let visionIngresada = Number(prompt("Ingresa tu vision"));

function puedeConducir(nombre, edad, altura, vision) {
    if(edad >= 18 && altura > 150 && vision >= 8) {
        console.log(`${nombre} está capacitado/a para manejar`)
    } else {
        console.log(`${nombre} no está capacitado/a para manejar`)
    }
}
//puedeConducir(nombreIngresado, edadIngresada, alturaIngresada, visionIngresada)

// 7
//let nombreEntrada = prompt("Ingrese su nombre")
//let tipoPase = prompt("Ingrese su tipo de pase (vip o normal)")
//let tieneEntrada = prompt("¿Cuenta con una entrada? Responda con 'si' o 'no'")

function entradaPermitida(nombre, pase, poseeEntrada) {
    if(nombre === "Valentina" || pase === "vip") {
        console.log("Bienvenido/a")
    } else if(poseeEntrada === "si") {
        let respuesta = prompt("¿Desea utilizar su entrada? Responda con 'si' o 'no'")
        if(respuesta === "si") {
            console.log("Bienvenido/a")
        }
    } else {
        let respuesta = prompt("¿Desea comprar una entrada? Responda con 'si' o 'no'")
        if(respuesta === "si") {
            let dineroDisponible = Number(prompt("Ingrese su dinero disponible"))
            if(dineroDisponible >= 1000) {
                console.log("Compra de entrada exitosa, bienvenido/a")
            } else {
                console.log("Fondos insuficientes")
            }
        } else {
            console.log("Hasta luego")
        }
    }
}
//entradaPermitida(nombreEntrada, tipoPase, tieneEntrada)

// 8
//let numeroIngresado1 = Number(prompt("Ingresa un número del 1 al 10"));

function adivinanza() {
    let numeroIncognita = 4;

    if(numeroIngresado1 === numeroIncognita) {
        console.log("Ganaste, has adivinado el número")
    } else if(numeroIngresado1 > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo")
        let numeroIngresado2 = Number(prompt("Ingresa un número del 1 al 10"));

        if(numeroIngresado2 === numeroIncognita) {
            console.log("Ganaste, has adivinado el número")
        } else if(numeroIngresado2 > numeroIncognita) {
            console.log("El número ingresado es mayor, vuelve a intentarlo")
            let numeroIngresado3 = Number(prompt("Ingresa un número del 1 al 10"));

            if(numeroIngresado3 === numeroIncognita) {
                console.log("Ganaste, has adivinado el número")
            } else {
                console.log("Has perdido")
            }
        } else if(numeroIngresado2 < numeroIncognita){
            console.log("El número ingresado es menor, vuelve a intentarlo")
            let numeroIngresado3 = Number(prompt("Ingresa un número del 1 al 10"));

            if(numeroIngresado3 === numeroIncognita) {
                console.log("Ganaste, has adivinado el número")
            } else {
                console.log("Has perdido")
            }
        }
    } else {
        console.log("El número ingresado es menor, vuelve a intentarlo")
        let numeroIngresado2 = Number(prompt("Ingresa un número del 1 al 10"));

        if(numeroIngresado2 === numeroIncognita) {
            console.log("Ganaste, has adivinado el número")
        } else if(numeroIngresado2 > numeroIncognita) {
            console.log("El número ingresado es mayor, vuelve a intentarlo")
            let numeroIngresado3 = Number(prompt("Ingresa un número del 1 al 10"));

            if(numeroIngresado3 === numeroIncognita) {
                console.log("Ganaste, has adivinado el número")
            } else {
                console.log("Has perdido")
            }
        } else if(numeroIngresado2 < numeroIncognita){
            console.log("El número ingresado es menor, vuelve a intentarlo")
            let numeroIngresado3 = Number(prompt("Ingresa un número del 1 al 10"));

            if(numeroIngresado3 === numeroIncognita) {
                console.log("Ganaste, has adivinado el número")
            } else {
                console.log("Has perdido")
            }
        }
    }
}
//adivinanza()

// 9
//let edad = Number(prompt("Ingresa tu edad"));

function rangoEtario() {
    if(edad >= 0 && edad <= 12) {
        console.log("Eres un infante")
    } else if(edad >= 13 && edad <= 18) {
        console.log("Eres un adolescente")
    } else if(edad >= 19 && edad <= 45) {
        console.log("Eres un mayor jóven")
    } else if(edad >= 46 && edad <= 99) {
        console.log("Eres un anciano")
    } else {
        console.log("¿De verdad tienes esa edad?")
    }
}
//rangoEtario()

// 10
let jugada1 = prompt("Ingresa PIEDRA, PAPEL o TIJERAS");
let jugada2 = prompt("Ingresa PIEDRA, PAPEL o TIJERAS");

function piedraPapelTijeras() {
    if(jugada1 === jugada2) {
        console.log("Empate")
    } else if(jugada1 === "PIEDRA" && jugada2 === "PAPEL" || jugada1 === "PAPEL" && jugada2 === "TIJERAS" || jugada1 === "TIJERAS" && jugada2 === "PIEDRA") {
        console.log("Jugador 2 ha ganado")
    } else if(jugada1 === "PIEDRA" && jugada2 === "TIJERAS" || jugada1 === "PAPEL" && jugada2 === "PIEDRA" || jugada1 === "TIJERAS" && jugada2 === "PAPEL") {
        console.log("Jugador 1 ha ganado")
    } else {
        console.log("Un jugador ha hecho trampa")
    }
}
piedraPapelTijeras()

// 11
//let colorIngresado = prompt("Ingresa un color con el siguiente formato: Negro");

switch (colorIngresado) {
    case "Blanco":
        console.log("Falta de color");
        break;
    case "Negro":
        console.log("Falta de color");
        break;     
    case "Verde":
        console.log("El color de la naturaleza");
        break;
    case "Azul":
        console.log("El color del agua");
        break;      
    case "Amarillo":
        console.log("El color del sol");
        break; 
    case "Rojo":
        console.log("El color del fuego");
        break; 
    case "Marrón":
        console.log("El color de la tierra");
        break; 
    default:
        console.log("Excelente elección, no lo teniamos pensado")
}

// 13
//let valorNumerico1 = Number(prompt("Ingresa un número a operar"));
//let valorNumerico2 = Number(prompt("Ingresa otro número a operar"));
//let operacion = prompt("Ingresa la operación usando: +, -, /, *");

function operarDosNumeros() {
    if(operacion === "+") {
        console.log(valorNumerico1 + valorNumerico2)
    } else if(operacion === "-") {
        console.log(valorNumerico1 - valorNumerico2)
    } else if(operacion === "*") {
        console.log(valorNumerico1 * valorNumerico2)
    } else if(operacion === "/") {
        if(valorNumerico2 === 0) {
            console.log("ERROR")
        }
        console.log(valorNumerico1 / valorNumerico2)
    } else {
        console.log("ERROR")
    }
}
//operarDosNumeros()

// 14
//let nombreDni = prompt("Ingresa tu nombre tal cual aparece en tu DNI");
//let numeroDni = prompt("Ingresa tu número de DNI");
//let generoDni = prompt("Ingresa tu género tal cual aparece en tu DNI");

function datosDni() {
    let confirmacion = prompt(`Confirme si sus datos son correctos escribiendo si o no: nombre-${nombreDni}, número-${numeroDni}, género-${generoDni}`)

    if (confirmacion === "si") {
        let dni = {
            nombre: nombreDni,
            numero: numeroDni,
            genero: generoDni
        }
        console.table(dni)
        console.log("Registro exitoso")
    } else {
        console.log("Vuelva a intentarlo en 1 mes")
    }
}
//datosDni()