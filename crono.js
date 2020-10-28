var h = 0
var min  = 0
var sec = 0

var tempo = 1000
var cron;
function start() {
    cron = setInterval(() => { timer() }, tempo)
   
}

function pause() {
    clearInterval(cron)
}

function stopTimer() {
    clearInterval(cron)
    h = 0
    min = 0
    sec = 0

    document.getElementById('counter').innerHTML = '00:00:00'
}
function timer() {


    sec++
    if(sec == 60){
        sec = 0 
        min++
        if (min == 60) {
            min = 0
            h++
        }
    }

    var format = (h > 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0'+ sec: sec)
    document.getElementById('counter').innerHTML = format
}