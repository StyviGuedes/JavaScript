
function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop(0, 1, 0.2);
  
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}

