var voltas = [];

var h = 0;
var min  = 0;
var sec = 0;
var mSec = 0;

var tempo = 10;
var cron;

function start() {
    pause();
    cron = setInterval(() => { timer() }, tempo);
}

function pause() {
    clearInterval(cron);
}

function stopTimer() {
    clearInterval(cron);
    h = 0;
    min = 0;
    sec = 0;
    mSec = 0;
    var ListTime = document.querySelector('.time-marker');
    ListTime.innerHTML = '';
    document.getElementById('counter').innerHTML = '00:00:00:00';
}

function timer() {
    mSec++
    if(mSec == 100) {
        mSec = 0
        sec++
        if(sec == 60) {
            sec = 0 
            min++
            if (min == 60) {
                min = 0
                h++
            }
        }
    }

    var format = (h > 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0'+ sec: sec) + ':' + (mSec < 10 ? '0'+ mSec : mSec)
    document.getElementById('counter').innerHTML = format
}