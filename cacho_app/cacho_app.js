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
const relanzar=document.getElementById("relanzar");
const resetear=document.getElementById("resetear");


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

lanzar.addEventListener("click",lanzarDados);

balasPlayer.addEventListener("click",anotarBalas);
tontosPlayer.addEventListener("click",anotarTontos);
trenesPlayer.addEventListener("click",anotarTrenes);
cuadrasPlayer.addEventListener("click",anotarCuadras);
quinasPlayer.addEventListener("click",anotarQuinas);
cenasPlayer.addEventListener("click",anotarCenas);


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
        if(i!=1){
        balasPlayer.innerText=i+" Balas: "+suma;
        }else{
        balasPlayer.innerText=i+" Bala: "+suma;
        }

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
        if(i!=1){
        tontosPlayer.innerText=i+" Tontos: "+suma;
        }else{
        tontosPlayer.innerText=i+" Tonto: "+suma;
        }
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
        if(i!=1){
        trenesPlayer.innerText=i+ " Trenes: "+suma;
        }else{
        trenesPlayer.innerText=i+" Tren: "+suma;
        }
        
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
        
        if(i!=1){
        cuadrasPlayer.innerText=i+" Cuadras: "+suma;
        }else{
        cuadrasPlayer.innerText=i+" Cuadra: "+suma;
        }
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
        if(i!=1){
        quinasPlayer.innerText=i+" Quinas: "+suma;
        }else{
        quinasPlayer.innerText=i+" Quina: "+suma;
        }
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
        if(i!=1){
        cenasPlayer.innerText=i+" Cenas: "+suma;    
        }else{
        cenasPlayer.innerText=i+" Cena: "+suma;
        }
}

