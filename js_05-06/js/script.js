var h = 0,
    m = 0,
    s = 0,
    ms = 0,
    timerID;


var start = document.getElementById('Start'),
    pause = document.getElementById('Pause'),
    split = document.getElementById('Split'),
    clear = document.getElementById('Clear'),
    timer = document.getElementById('timer'),
    milliSec = document.getElementById('milli');


function fromZeroToTen(){
    var h1, m1, s1, ms1;

    if( h < 10 ){
        h1 = '0' + h;
    } else {
        h1 = h;
    }

    if( m < 10 ){
        m1 = '0' + m;
    } else {
        m1 = m;
    }

    if( s < 10 ){
        s1 = '0' + s;
    } else {
        s1 = s;
    }

    if( ms < 10 ){
        ms1 = '00' + ms;
    } else {
      if( ms < 100 && ms > 9 ){
          ms1 = '0' + ms;
      } else {
        ms1 = ms;
      }
  }
    timer.innerHTML = h1 + ':' + m1 + ':' + s1;
    milliSec.innerHTML = ms1;
}


function startTimer(){

    ms++;
    if( ms > 1000 ){
        s++;
        ms = 0;
    }

    if( s > 60 ){
        m++;
        s = 0;
    }

    if( m > 60 ){
        h++;
        m = 0;
    }
    fromZeroToTen();
}


function startClock(){
    timerID = setInterval('startTimer()', 1);
    if( Start.style.display = 'none' ){
        Pause.style.display = 'inline-block';
    }
}

Start.onclick = startClock;


function stopClock(){
    clearInterval(timerID);
    if( Pause.style.display = 'none'){
        Start.style.display = 'inline-block';
    }
    return startClock;
}

Pause.onclick = stopClock;


function clearAll(){

    h = 0, m = 0, s = 0, ms = 0;

    fromZeroToTen();
    clearInterval(timerID);

    timer.innerHTML = h1 + ':' + m1 + ':' + s1;
    milliSec.innerHTML = ms1;

}

Clear.onclick = clearAll;


function splitClock(){

        var content = document.querySelector('.content');
            p = document.createElement('p');
            p.innerHTML = 'Split '+' : '+h+':'+m+':'+s+':'+ms;
            p.style.marginLeft = '20px';
            p.style.color = 'grey';
            p.style.fontSize = '15px';
            content.appendChild(p);

}

Split.onclick = splitClock;
