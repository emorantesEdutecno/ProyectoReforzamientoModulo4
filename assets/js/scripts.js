// No colocar codigo suelto
// todo debe estar dentro de funciones -paradigma de programación modular
// todo debe estar dentro de objetos - paradigma de POO
// y las funciones deben ser invocadas por eventos - paradigma orientado a eventos

// estructura de datos con múltiples valores
// El alcance o scope del arreglo será global
var arregloDatos = ['Paulina', 'Mariana', 'Francisco', 'Nader', 'Romina', 'Esteban', 'Felipe', 'Sergio'];


function asignarEventos(){

    // console.log('funciona'); // solo tiene fines de depuración

    // ubico el elemento del dom y asigno la referencia en una variable
    let elBoton = document.getElementById('btnPresioname');
    // la variable puede manipular los métodos y propiedades de la API DOM
    // la funcion addEventListener hace parte de las funciones de la API, y en este caso sirve para asignar "Event Listeners"
    // nunca colocar paréntesis en las funciones de callback o de lo contrario se invocaria inmediatamente la función sin que ocurra el evento
    // los eventos en javascript no tienen la palabra on
    elBoton.addEventListener('click', saludar);

    let elParrafoCambiante = document.getElementById('parrafoCambiante');
    elParrafoCambiante.addEventListener('mouseover', cambiarParrafo);
    elParrafoCambiante.addEventListener('mouseleave', retornarParrafo);

    let elBotonModoClaro = document.getElementById('btnModoClaro');
    elBotonModoClaro.addEventListener('click', activarModoClaro);

    let elBotonModoOscuro = document.getElementById('btnModoOscuro');
    elBotonModoOscuro.addEventListener('click', activarModoOscuro);

    let elBotonContenidoArray = document.getElementById('btnInvocarContenidoArray');
    elBotonContenidoArray.addEventListener('click', pasarArray );

}

function pasarArray(){
    crearContenidoDinamico(arregloDatos);
}



function activarModoClaro(){
    // cuando usted busca muchos elementos en el DOM (getElementsByTagName, getElementsByClassName), la respuesta viene en forma de arreglo
    let elBody = document.getElementsByTagName('body');
    // el primer elemento encontrado se aloja en la posición 0 del arreglo
    elBody[0].style.backgroundColor = 'beige';
    elBody[0].style.color = 'navy';
}

function activarModoOscuro(){
    let elBody = document.getElementsByTagName('body');
    elBody[0].style.backgroundColor = 'navy';
    elBody[0].style.color = 'beige';
}


// el orden de las funciones NO IMPORTA , porque serán invocadas de acuerdo con el evento
function crearContenidoDinamico(unArreglo){
    // variable para alojar el contenido del arreglo
    let contenido = '';
    // buscamos el div vacio para inyectarle parrafos hijos
    let elDivVacio = document.getElementById('divContenidoDinamico');

    // identifico el tamaño del arreglo para crear un ciclo for que extraiga los datos
    let tamanoArreglo = unArreglo.length;
    // creo el ciclo for que recorre el arreglo
    for(let i=0; i < tamanoArreglo; i++){
        contenido = unArreglo[i];
        // creo un nuevo elemento de párrafo en el DOM
        let unParrafoNuevo = document.createElement('p');
        // cambiamos el contenido del parrafo nuevo con la propiedad innerHTML
        unParrafoNuevo.innerHTML = contenido;
        // asociar en el divVacio un parrafo hijo
        elDivVacio.appendChild(unParrafoNuevo);
    }
}

function cambiarParrafo(){
    let elParrafo = document.getElementById('parrafoCambiante');
    elParrafo.style.backgroundColor = 'lightblue';
    elParrafo.style.color = 'blue';

}

function retornarParrafo(){
    let elParrafo = document.getElementById('parrafoCambiante');
    elParrafo.style.backgroundColor = 'white';
    elParrafo.style.color = 'black';
}

function saludar(){
    // console.log('Hola Mundo');
    // ubico el elemento del dom y asigno la referencia en una variable
    let elParrafo = document.getElementById('demo');
    // la variable puede manipular los métodos y propiedades de la API DOM
    elParrafo.innerHTML = 'Hola Mundo !!!!';

    elParrafo.style.color = 'Red';
    // cuando manipule el DOM con javascript , los estilos van en notación camelCase
    elParrafo.style.backgroundColor = 'yellow';

}


function otraFuncion(){
    alert('bloquea todo');
}

function sumar(dato1, dato2){
    let resultado = Number(dato1) + Number(dato2);
    return resultado;
}



// invocacion a otra funcion
// otraFuncion();