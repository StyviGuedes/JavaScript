//ator
let xAtor = 85;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostrarAtor(){
   image(imagemAtor,100, yAtor, 30, 30);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros,xAtor, yAtor, 15);
    if (colisao){
      voltaAtorPosicaoInicial();
      somColidiu.play()
       if(pontoMaiorQueZero()){
        meusPontos -= 1
      }
    }  
  } 
}

function  voltaAtorPosicaoInicial (){
  yAtor = 366;

  
      
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill (178,34,34)
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1
    voltaAtorPosicaoInicial()
    somDosPontos.play()

  }
    
}

function pontoMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 368;
}

