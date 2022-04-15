/*Creación de arrays y objetos*/
let estrellas = []
let temperaturas = []
let objetoEstrella = []

const lista = document.querySelector('#lista')

fetch('./data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((estrellaData) => {
            const divLista = document.createElement('div')
            divLista.innerHTML = `
                <hr>
                <h4> Nombre de Estrella: ${estrellaData.nombre} </h4>
                <p> Temperatura de Estrella: ${estrellaData.Temperatura} Kelvin</p>
            `
            lista.append(divLista)
        })
    })


function estrellaAdicional(nombre, temperatura) {
    this.nombre = nombre;
    this.temperatura = temperatura;
}
/* Función Principal que realiza los cálculos */
function Temperatura(longitudDeOndaIngresada){
    const CONSTANTE = 0.002898;
    return Math.round((parseFloat(longitudDeOndaIngresada.value)) / CONSTANTE) }


let longitudDeOndaIngresada = document.querySelector("#longitudDeOnda")
let nombreDeEstrellaIngresado = document.querySelector("#nombreDeEstrella")

let bloque2 = document.querySelector(".bloque2");

let btn = document.querySelector("#btnMain")
btn.addEventListener("click", clickRespuesta)

function clickRespuesta(){
 
    estrellas.push(nombreDeEstrellaIngresado.value)
    temperaturas.push(Temperatura(longitudDeOnda))
    let estrellaNueva = new estrellaAdicional(nombreDeEstrellaIngresado.value, Temperatura(longitudDeOndaIngresada))
    objetoEstrella.push(estrellaNueva)
    let EstrellasAlmacenadas =  JSON.stringify(objetoEstrella)
    localStorage.setItem("Estrellas", EstrellasAlmacenadas);
    const promedioDeTemperaturas = (objetoEstrella.reduce((acc, el) => acc + el.temperatura, 0)/estrellas.length )

    bloque2.innerHTML = `
    <hr>
    <h2>El nombre de la estrella añadida es: ${nombreDeEstrellaIngresado.value} </h2>
    <p>El valor de la Longitud de Onda ingresado es: ${longitudDeOnda.value} m </p>
    <p>El valor de la Temperatura de la estrella estimado es: ${Temperatura(longitudDeOnda)} K </p>
    <p>La lista de estrellas que usted ha almacenado es: ${estrellas} </p>
    <p>El promedio de temperaturas entre todas las estrellas que usted ha registrado es de ${promedioDeTemperaturas} K</p>
    <br>
    <h3>A continuación, te presentamos una lista de estrellas para que puedas comparar temperaturas con las que tu ingresaste anteriormente</h3>`;
document.bloque2.appendChild(bloque2)
}



 
