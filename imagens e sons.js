let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons
let trilhaSonora;
let somDosPontos;
let somColidiu;


function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3]


 trilhaSonora = loadSound("sons/doom.mp3");
 somDosPontos = loadSound("sons/pontos.wav");
 somColidiu = loadSound("sons/mine.mp3");
}