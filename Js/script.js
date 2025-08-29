var modal = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");
var fechar = document.querySelector("#popupFechar");
var titulo = document.querySelector(".tituloPopup");
var timer = document.querySelector("#timer");
var cha = document.querySelectorAll(".cha");
var start = document.querySelector("#start");
var foto = document.querySelector(".fotoPopup");

let tempo = 0;
let intervalo = null;

fechar.addEventListener("click", fecharModal);
overlay.addEventListener("click", fecharModal);
start.addEventListener("click", startTimer);

cha.forEach(item => 
{
  item.addEventListener("click", () => abrirModal(item));
});

function abrirModal(item) {
  modal.style.display = "block";
  overlay.style.display = "block";

  titulo.textContent = item.dataset.titulo;
  tempo = parseInt(item.dataset.tempo);

  foto.src = item.dataset.foto;

  timer.textContent = tempo;
}

function startTimer() 
{
  clearInterval(intervalo);

  for (let i = tempo; i >= 0; i--) 
    {
      setTimeout(() => 
        {
          timer.textContent = i;
          if (i == 0)
          {
            alert("cabo"); 
          }
      }, (tempo - i) * 1000); 
  }
}

function fecharModal() 
{
  modal.style.display = "none";
  overlay.style.display = "none";
  clearInterval(intervalo);
}