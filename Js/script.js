var modal = document.querySelector("#popup");
var titulo = document.querySelector("#tituloPopup");
var foto = document.querySelector("#fotoPopup");
var fechar = document.querySelector("#popupFechar");
var start = document.querySelector("#start");
var stopT = document.querySelector("#stop");
var timer = document.querySelector("#timer");
var cha = document.querySelectorAll("figure");
var overlay = document.querySelector("#overlay");
var reset = document.querySelector("#reset")

let minutos = 0;
let minutosIniciais = 0;
let segundos = 0;
let segundosIniciais = 0;
let intervalo = null;

fechar.addEventListener("click", fecharModal);
overlay.addEventListener("click", fecharModal);
start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);
stopT.addEventListener("click", stopTimer);
cha.forEach(item => 
{
  item.addEventListener("click", () => abrirModal(item));
});

function atualizarDisplay() {
  timer.textContent = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}


function abrirModal(item) {
  modal.style.display = "block";
  overlay.style.display = "block";

  titulo.textContent = item.dataset.titulo;
  minutosIniciais = parseInt(item.dataset.tempo);
  segundosIniciais = 0;

  minutos = minutosIniciais;
  segundos = segundosIniciais;

  foto.src = item.dataset.foto;
  atualizarDisplay();
}

function fecharModal() 
{
  modal.style.display = "none";
  overlay.style.display = "none";
  clearInterval(intervalo);
  intervalo = null;
}

function startTimer() 
{
  if(intervalo !== null)
  {
    return;
  }

  intervalo = setInterval(() =>
  {
    if (minutos === 0 && segundos === 0) 
    {
      clearInterval(intervalo);
      intervalo = null;
      atualizarDisplay();
      alert("cabou");
      return;
    }
    else if(segundos === 0)
    {
        minutos--;
        segundos = 59;
    }
    else
    {
      segundos--;
    }

    atualizarDisplay();
  }, 1000);
}

function resetTimer()
{
  clearInterval(intervalo);
  intervalo = null;
  minutos = minutosIniciais;
  segundos = segundosIniciais;
  atualizarDisplay();
}

function stopTimer()
{
  clearInterval(intervalo);
  intervalo = null;
}