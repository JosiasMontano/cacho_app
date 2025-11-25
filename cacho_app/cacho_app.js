const puntajeCpu=document.getElementById("puntajeCpu");
const dadoCpu1=document.getElementById("dadoCpu1");
const dadoCpu2=document.getElementById("dadoCpu2");
const dadoCpu3=document.getElementById("dadoCpu3");
const dadoCpu4=document.getElementById("dadoCpu4");
const dadoCpu5=document.getElementById("dadoCpu5");

const balasCpu=document.getElementById("balasCpu");
const tontosCpu=document.getElementById("tontosCpu");
const trenesCpu=document.getElementById("trenesCpu");
const cuadrasCpu=document.getElementById("cuadrasCpu");
const quinasCpu=document.getElementById("quinasCpu");
const cenasCpu=document.getElementById("cenasCpu");
const escaleraCpu=document.getElementById("escaleraCpu");
const pokerCpu=document.getElementById("pokerCpu");
const fullCpu=document.getElementById("fullCpu");
const grande1Cpu=document.getElementById("grande1Cpu");
const grande2Cpu=document.getElementById("grande2Cpu");

const puntajePlayer=document.getElementById("puntajePlayer");
const dado1=document.getElementById("dado1");
const dado2=document.getElementById("dado2");  
const dado3=document.getElementById("dado3");
const dado4=document.getElementById("dado4");
const dado5=document.getElementById("dado5");

const balasPlayer=document.getElementById("balasPlayer");
const tontosPlayer=document.getElementById("tontosPlayer");
const trenesPlayer=document.getElementById("trenesPlayer");
const cuadrasPlayer=document.getElementById("cuadrasPlayer");
const quinasPlayer=document.getElementById("quinasPlayer");
const cenasPlayer=document.getElementById("cenasPlayer");
const escaleraPlayer=document.getElementById("escaleraPlayer");
const pokerPlayer=document.getElementById("pokerPlayer");
const fullPlayer=document.getElementById("fullPlayer");
const grande1Player=document.getElementById("grande1Player");
const grande2Player=document.getElementById("grande2Player");

const lanzar=document.getElementById("lanzar");

let totalBalas=0;
let totalTontos=0;
let totalTrenes=0;
let totalCuadras=0;
let totalQuinas=0;
let totalCenas=0;
let totalEscalera=0;
let totalPoker=0;
let totalFull=0;
let totalGrande1=0;
let totalGrande2=0;


function aleatorio(){
    return Math.floor(Math.random() * 6) + 1;
}

function lanzarDados(){
    dado1.innerText=aleatorio();
    dado2.innerText=aleatorio();
    dado3.innerText=aleatorio();
    dado4.innerText=aleatorio();
    dado5.innerText=aleatorio();
}

function hayCuatroIguales(dados) {
    const contador = {};
    // Contar ocurrencias de cada número
    for (let dado of dados) {
        contador[dado] = (contador[dado] || 0) + 1;
    }
    // Verificar si algún número aparece 4 o más veces
    for (let numero in contador) {
        if (contador[numero] == 4) {
            return true;
        }
    }
    return false;
}

function calcularPuntaje(){
    const puntaje=totalBalas+totalTontos+totalTrenes+totalCuadras+totalQuinas+totalCenas+totalEscalera+totalPoker+totalFull+totalGrande1+totalGrande2;
    puntajePlayer.innerText=puntaje;
    puntajePlayer.innerText=puntaje;
}

lanzar.addEventListener("click",lanzarDados);

balasPlayer.addEventListener("click",anotarBalas);
tontosPlayer.addEventListener("click",anotarTontos);
trenesPlayer.addEventListener("click",anotarTrenes);
cuadrasPlayer.addEventListener("click",anotarCuadras);
quinasPlayer.addEventListener("click",anotarQuinas);
cenasPlayer.addEventListener("click",anotarCenas);
escaleraPlayer.addEventListener("click",anotarEscalera);
pokerPlayer.addEventListener("click",anotarPoker);
fullPlayer.addEventListener("click",anotarFull);
grande1Player.addEventListener("click",anotarGrande1);
grande2Player.addEventListener("click",anotarGrande2);


function anotarBalas(){
        var suma=0;
        var i=0;
        if(dado1.textContent==1){
            suma++;
            i++;
        }
        if(dado2.textContent==1){
            suma++;
            i++;
        }
        if(dado3.textContent==1){
            suma++;
            i++;
        }
        if(dado4.textContent==1){
            suma++;
            i++;
        }
        if(dado5.textContent==1){
            suma++;
            i++;
        }
        totalBalas=suma;
        if(i!=1){
        balasPlayer.innerText=i+" Balas: "+suma;
        }else{
        balasPlayer.innerText=i+" Bala: "+suma;
        }
        calcularPuntaje();

}

function anotarTontos(){
        var suma=0;
        var i=0;
        if(dado1.textContent==2){
            suma+=2;
            i++;
        }
        if(dado2.textContent==2){
            suma+=2;
            i++;
        }
        if(dado3.textContent==2){
            suma+=2;
            i++;
        }
        if(dado4.textContent==2){
            suma+=2;
            i++;
        }
        if(dado5.textContent==2){
            suma+=2;
            i++;
        }
        totalTontos=suma;
        if(i!=1){
        tontosPlayer.innerText=i+" Tontos: "+suma;
        }else{
        tontosPlayer.innerText=i+" Tonto: "+suma;
        }
        calcularPuntaje();
}

function anotarTrenes(){
        var suma=0;
        var i=0;
        if(dado1.textContent==3){
            suma+=3;
            i++;
        }
        if(dado2.textContent==3){
            suma+=3;
            i++;
        }
        if(dado3.textContent==3){
            suma+=3;
            i++;
        }
        if(dado4.textContent==3){
            suma+=3;
            i++;
        }
        if(dado5.textContent==3){
            suma+=3;
            i++;
        }
        totalTrenes=suma;
        if(i!=1){
        trenesPlayer.innerText=i+ " Trenes: "+suma;
        }else{
        trenesPlayer.innerText=i+" Tren: "+suma;
        }
        calcularPuntaje();
}

function anotarCuadras(){
        var suma=0;
        var i=0;
        if(dado1.textContent==4){
            suma+=4;
            i++;
        }
        if(dado2.textContent==4){
            suma+=4;
            i++;
        }
        if(dado3.textContent==4){
            suma+=4;
            i++;
        }
        if(dado4.textContent==4){
            suma+=4;
            i++;
        }
        if(dado5.textContent==4){
            suma+=4;
            i++;
        }
        totalCuadras=suma;
        if(i!=1){
        cuadrasPlayer.innerText=i+" Cuadras: "+suma;
        }else{
        cuadrasPlayer.innerText=i+" Cuadra: "+suma;
        }
        calcularPuntaje();
}

function anotarQuinas(){
        var suma=0;
        var i=0;
        if(dado1.textContent==5){
            suma+=5;
            i++;
        }   
        if(dado2.textContent==5){
            suma+=5;
            i++;
        }
        if(dado3.textContent==5){
            suma+=5;
            i++;
        }
        if(dado4.textContent==5){
            suma+=5;
            i++;
        }
        if(dado5.textContent==5){
            suma+=5;
            i++;
        }
        totalQuinas=suma;
        if(i!=1){
        quinasPlayer.innerText=i+" Quinas: "+suma;
        }else{
        quinasPlayer.innerText=i+" Quina: "+suma;
        }
        calcularPuntaje();
}

function anotarCenas(){
        var suma=0;
        var i=0;
        if(dado1.textContent==6){
            suma+=6;
            i++;
        }
        if(dado2.textContent==6){
            suma+=6;
            i++;
        }
        if(dado3.textContent==6){
            suma+=6;
            i++;
        }
        if(dado4.textContent==6){
            suma+=6;
            i++;
        }
        if(dado5.textContent==6){
            suma+=6;
            i++;
        }
        totalCenas=suma;
        if(i!=1){
          cenasPlayer.innerText=i+" Cenas: "+suma;    
        }else{
          cenasPlayer.innerText=i+" Cena: "+suma;
        } 
        calcularPuntaje();
}

function anotarEscalera(){
    const uno=Number(dado1.innerText);
    const dos=Number(dado2.innerText);
    const tres=Number(dado3.innerText);
    const cuatro=Number(dado4.innerText);
    const cinco=Number(dado5.innerText);
    const set=new Set([uno,dos,tres,cuatro,cinco]);
    if(set.size==5){
        totalEscalera=25;
        escaleraPlayer.innerText="Escalera: "+totalEscalera;
    }else{
        escaleraPlayer.innerText="Escalera: 0"; 
    }
    calcularPuntaje();
}

function anotarPoker(){
    const uno=Number(dado1.innerText);
    const dos=Number(dado2.innerText);
    const tres=Number(dado3.innerText);
    const cuatro=Number(dado4.innerText);
    const cinco=Number(dado5.innerText);
    const fulles=[uno,dos,tres,cuatro,cinco];
    const set=new Set([uno,dos,tres,cuatro,cinco]); 
    if(set.size==2 && hayCuatroIguales(fulles)==false){
        totalPoker=30;
        pokerPlayer.innerText="Poker: "+totalPoker;
    }else{
        pokerPlayer.innerText="Poker: 0";
    }
    calcularPuntaje(); 
}
function anotarFull(){
    const uno=Number(dado1.innerText);
    const dos=Number(dado2.innerText);
    const tres=Number(dado3.innerText);
    const cuatro=Number(dado4.innerText);
    const cinco=Number(dado5.innerText);
    const fulles=[uno,dos,tres,cuatro,cinco];
    const set=new Set(fulles);
    if(set.size==2 && hayCuatroIguales(fulles)==true){
        totalFull=35;
        fullPlayer.innerText="Full: "+totalFull;
    }else{
        fullPlayer.innerText="Full: 0";
    }
    calcularPuntaje();
}

function anotarGrande1(){
    const uno=Number(dado1.innerText);
    const dos=Number(dado2.innerText);
    const tres=Number(dado3.innerText);
    const cuatro=Number(dado4.innerText);
    const cinco=Number(dado5.innerText);
    const set=new Set([uno,dos,tres,cuatro,cinco]);
    if(set.size==1){
        totalGrande1=50;
        grande1Player.innerText="Grande: "+totalGrande1;
    }else{
        grande1Player.innerText="Grande: 0"; 
    }
    calcularPuntaje();
}

function anotarGrande2(){
    const uno=Number(dado1.innerText);
    const dos=Number(dado2.innerText);
    const tres=Number(dado3.innerText);
    const cuatro=Number(dado4.innerText);
    const cinco=Number(dado5.innerText);
    const set=new Set([uno,dos,tres,cuatro,cinco]);
    if(set.size==1){
        totalGrande2=50;
        grande2Player.innerText="Grande: "+totalGrande2;
    }else{
        grande2Player.innerText="Grande: 0"; 
    }
    calcularPuntaje();
}