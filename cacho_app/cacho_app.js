const bot1=document.getElementById("bot1");
const bot2=document.getElementById("bot2");
const bot3=document.getElementById("bot3");
const bot4=document.getElementById("bot4");
const bot5=document.getElementById("bot5");
const bot6=document.getElementById("bot6");

const dado1=document.getElementById("dado1");
const dado2=document.getElementById("dado2");
const dado3=document.getElementById("dado3");
const dado4=document.getElementById("dado4");
const dado5=document.getElementById("dado5");
const mano=[0,0,0,0,0];
const sumas= [0,0,0,0,0];
const lanz=document.getElementById("lanz");
const prueba=document.getElementById("prueba");
const reset=document.getElementById("reset");
var verificador=0;
  var numAle;
  var numAle2;
  var numAle3;
  var numAle4;
  var numAle5;

lanz.onclick = () => lanzar();

function lanzar(){
  verificacdor=0;
  const numAle = Math.floor(Math.random() * 6) + 1;
  const numAle2 = Math.floor(Math.random() * 6) + 1;
  const numAle3 = Math.floor(Math.random() * 6) + 1;
  const numAle4 = Math.floor(Math.random() * 6) + 1;
  const numAle5 = Math.floor(Math.random() * 6) + 1;
  
    dado1.innerText = numAle;
    dado2.innerText = numAle2;
    dado3.innerText = numAle3;
    dado4.innerText = numAle4;
    dado5.innerText = numAle5;
 
  mano[0]=numAle;
  mano[1]=numAle2;
  mano[2]=numAle3;
  mano[3]=numAle4;
  mano[4]=numAle5;
 /* mano[0]=1;
  mano[1]=2;
  mano[2]=4;
  mano[3]=5;
  mano[4]=6;*/
  prueba.innerText = mano;
  
  d1.disabled = false;
  d2.disabled = false;
  d3.disabled = false;
  d4.disabled = false;
  d5.disabled = false;
}

bot1.onclick = () => sum(mano, 1);
bot2.onclick = () => sum(mano,2);
bot3.onclick = () => sum(mano,3);
bot4.onclick = () => sum(mano,4);
bot5.onclick = () => sum(mano,5);
bot6.onclick = () => sum(mano,6);
esc.onclick = () => escalera(mano,esc);
dupla.onclick = () => duplas(mano,dupla);
poker.onclick = () => pokers(mano,poker);


d1.onclick = () =>  reverse(document.getElementById("dado1"), document.getElementById("dado1"));
d2.onclick = () =>  reverse(document.getElementById("dado2"), document.getElementById("dado2")); 
d3.onclick = () =>  reverse(document.getElementById("dado3"), document.getElementById("dado3"));
d4.onclick = () =>  reverse(document.getElementById("dado4"), document.getElementById("dado4"));
d5.onclick = () =>  reverse(document.getElementById("dado5"), document.getElementById("dado5"));


function reverse(elementoOrigen ,elementoDOM){
  const contenido = elementoOrigen.textContent; 
  const numero = Number(contenido.trim());
  const valor= 7 - numero;
  elementoDOM.innerText=valor;
  
  mano[0]=Number(dado1.innerText);;
  mano[1]=Number(dado2.innerText);;
  mano[2]=Number(dado3.innerText);;
  mano[3]=Number(dado4.innerText);;
  mano[4]=Number(dado5.innerText);;
  prueba.innerText = mano;
  
  d1.disabled = true;
  d2.disabled = true;
  d3.disabled = true;
  d4.disabled = true;
  d5.disabled = true;
  
}



grande1.onclick = () => grandes1(mano,grande1);
grande2.onclick = () => grandes1(mano,grande2);



function sum(mano, numero){
   const elementosIguales = mano.filter(elemento => elemento === numero);
  const suma = elementosIguales.reduce((total, actual) => total + actual, 0);
  if(numero==1 && document.getElementById('aea1').innerHTML === 'xd1'){
    aea1.innerText=suma;
} if(numero==2 && document.getElementById('aea2').innerHTML === 'xd2'){
    aea2.innerText=suma;
}if(numero==3 && document.getElementById('aea3').innerHTML === 'xd3'){
    aea3.innerText=suma;
}if(numero==4 && document.getElementById('aea4').innerHTML === 'xd4'){
    aea4.innerText=suma;
}if(numero==5 && document.getElementById('aea5').innerHTML === 'xd5'){
    aea5.innerText=suma;
}if(numero==6 && document.getElementById('aea6').innerHTML === 'xd6'){
    aea6.innerText=suma;
}
   
  return suma;
}
  

  reset.onclick = () => res();

  function res(){
    aea1.innerText = 'xd1';
    aea2.innerText = 'xd2';
    aea3.innerText = 'xd3';
    aea4.innerText = 'xd4';
    aea5.innerText = 'xd5';
    aea6.innerText = 'xd6';
  }

 
function escalera(mano, elementoDOM) {
    // Validaciones iniciales
    if (!Array.isArray(mano) || mano.length !== 5) {
        console.error("Error: La matriz debe tener 5 elementos");
        return false;
    }

    // Verificar números del 1 al 6
    const numerosValidos = mano.every(num => 
        Number.isInteger(num) && num >= 1 && num <= 6
    );
    if (!numerosValidos) {
        console.error("Error: Todos los elementos deben ser números enteros entre 1 y 6");
        return false;
    }

    // Eliminar duplicados (una escalera no puede tener números repetidos)
    const numerosUnicos = [...new Set(mano)];
    if (numerosUnicos.length !== 5) {
        return false;
    }

    // Ordenar
    const ordenada = numerosUnicos.sort((a, b) => a - b);

    // Verificar consecutividad normal (ej: [1,2,3,4,5] o [2,3,4,5,6])
    const diferenciaNormal = ordenada[4] - ordenada[0];
    const esEscaleraNormal = diferenciaNormal === 4 && 
                           ordenada.every((num, i, arr) => i === 0 || num === arr[i-1] + 1);

    // Verificar consecutividad circular (ej: [4,5,6,1,2] o [5,6,1,2,3])
    const esEscaleraCircular = (ordenada[0] === 1 && ordenada[1] === 2 && ordenada[2] === 3 && 
                               ordenada[3] === 4 && ordenada[4] === 6) || // [1,2,3,4,6]
                              (ordenada[0] === 1 && ordenada[1] === 2 && ordenada[2] === 3 && 
                               ordenada[3] === 5 && ordenada[4] === 6) || // [1,2,3,5,6]
                              (ordenada[0] === 1 && ordenada[1] === 2 && ordenada[2] === 4 && 
                               ordenada[3] === 5 && ordenada[4] === 6) || // [1,2,4,5,6]
                              (ordenada[0] === 1 && ordenada[1] === 3 && ordenada[2] === 4 && 
                               ordenada[3] === 5 && ordenada[4] === 6) || // [1,3,4,5,6]
                              (ordenada[0] === 2 && ordenada[1] === 3 && ordenada[2] === 4 && 
                               ordenada[3] === 5 && ordenada[4] === 6);   // [2,3,4,5,6]

    if (esEscaleraNormal || esEscaleraCircular) {
        // Verificar si algún botón de dados está deshabilitado
        const botonesDados = ['d1', 'd2', 'd3', 'd4', 'd5'].map(id => document.getElementById(id));
        const algunBotonBloqueado = botonesDados.some(boton => boton?.disabled);
        
        // Asignar puntuación según el estado de los botones
        const puntuacion = algunBotonBloqueado ? 25 : 30;

        // Actualizar el DOM
        if (elementoDOM && 'innerText' in elementoDOM) {
            elementoDOM.innerText = puntuacion;
        } else {
            console.warn("Elemento DOM no válido. No se actualizó el texto.");
        }
        return true;
    }
    
    return false;
}


function pokers(mano, elementoDOM) {
    // Contar frecuencia de cada número
    const frecuencia = {};
    mano.forEach(num => {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
    });

    // Verificar si hay un número con frecuencia 4 y otro con frecuencia 1
    const frecuencias = Object.values(frecuencia);
    const cumpleCondicion = (
        frecuencias.includes(4) && 
        frecuencias.includes(1)
    );

    // Actualizar el DOM si cumple
    if (cumpleCondicion) {
        if (elementoDOM && 'innerText' in elementoDOM) {
            elementoDOM.innerText = "40"; // Cambia el texto a 40
        } else {
            console.warn("Elemento DOM no válido. No se actualizó el texto.");
        }
    }

    return cumpleCondicion;
}


