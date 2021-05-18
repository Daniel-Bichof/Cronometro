
function relogio() {
    let data = new Date();
    let h = data.getHours();
    let min =  data.getMinutes();
    let seg = data.getSeconds();

    if( h < 10){
        h = "0"+ h
    };

    if( min < 10){
        min = "0"+ min
    };
    
    if( seg < 10){
        seg = "0"+ seg
    };
    
    let horas = `${h}:${min}:${seg}`
    //o valor .value do relógio vai receber as horas formatada da lina acima
    // document.querySelector("#relogio").value = horas; 

    var naTela = document.querySelector(".horario");
    naTela.innerHTML = `${horas}`;

    //console.log(h + ":" + min + ":" + seg);

}

var tempo = setInterval(relogio, 1000);
