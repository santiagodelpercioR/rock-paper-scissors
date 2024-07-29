let opciones = ['piedra', 'papel', 'tijera'];
let mensajeUsuario = document.getElementById('mensajeUsuario');
let mensajeCpu = document.getElementById('mensajeCpu');
let mensajeGanador = document.getElementById('mensajeGanador');
let puntajeUsuario = document.getElementById('puntaje');
let puntajeCpu = document.getElementById('puntajeCpu');
let contarPuntaje = 0;
let contarPuntajeCpu = 0;

function jugar(jugada) {
    let opcion = opciones[Math.floor(Math.random() * opciones.length)];
    mensajeUsuario.textContent = jugada;
    jugadaJugador.src=`${jugada}.png`;
    const jugadaCpuImg = document.getElementById('jugadaCpuImg');
    jugadaCpuImg.src=`think.png`;
    //Agregar un retraso de 2 segundos antes de la jugada de la CPU
    setTimeout(function () {
        
        mensajeCpu.textContent = opcion;
        
        
        jugadaCpuImg.src = `${opcion}.png`;

        if (jugada == opcion) {
            mensajeGanador.textContent = 'Empate';
        } else if (jugada == 'piedra' && opcion == 'papel') {
            contarPuntajeCpu++;
            puntajeCpu.textContent = contarPuntajeCpu;
            mensajeGanador.textContent = 'CPU';
        } else if (jugada == 'piedra' && opcion == 'tijera') {
            mensajeGanador.textContent = 'Usuario';
            contarPuntaje++;
            puntajeUsuario.textContent = contarPuntaje;
        } else if (jugada == 'papel' && opcion == 'tijera') {
            contarPuntajeCpu++;
            puntajeCpu.textContent = contarPuntajeCpu;
            mensajeGanador.textContent = 'CPU';
        } else if (jugada == 'papel' && opcion == 'piedra') {
            mensajeGanador.textContent = 'Usuario';
            contarPuntaje++;
            puntajeUsuario.textContent = contarPuntaje;
        } else if (jugada == 'tijera' && opcion == 'papel') {
            mensajeGanador.textContent = 'Usuario';
            contarPuntaje++;
            puntajeUsuario.textContent = contarPuntaje;
        } else if (jugada == 'tijera' && opcion == 'piedra') {
            contarPuntajeCpu++;
            puntajeCpu.textContent = contarPuntajeCpu;
            mensajeGanador.textContent = 'CPU';
        }
        
    }, 700); 
}

function seleccionar(jugador){
    sessionStorage.setItem('jugadorSeleccionado',jugador);
    window.location.href="juego.html";
}

function inicio(){
    window.location.href="index.html";
}

function cpuPensar(){
    
}