const velha = {

    JOGADOR_1: "X",
    JOGADOR_2: "O"
};

let tabuleiro = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    
];

let player = velha.JOGADOR_1;

let placar = {
    JOGADOR_1: 0, JOGADOR_2:0
};

var leNomes = function() {
    nomJ1 = prompt ("digite o nome do jogador 1");
    document.getElementById("placarP1").innerHTML = nomJ1 + " : " + placar.JOGADOR_1;

    nomJ2 = prompt ("digite o nome do jogador 2");
    document.getElementById("placarP2").innerHTML = nomJ2 + " : " + placar.JOGADOR_2;

}

let nomJ1;

let nomJ2;

let passoJogador = function(id, i, j){
    if(!VerificaVitoriaX() ){
        if(!tabuleiro[i][j]){

            tabuleiro[i][j] += (player == velha.JOGADOR_1) ? 1 : -1;   
           document.getElementById(id).innerHTML = player;
           trocaJogador();  
        }
        if(VerificaVitoriaX()){
            
             VerificaVitoriaX() == velha.JOGADOR_1? placar.JOGADOR_1 += 1 : placar.JOGADOR_2 += 1 ; 
            document.getElementById("placarP1").innerHTML = nomJ1 + " : " + placar.JOGADOR_1;
            document.getElementById("placarP2").innerHTML = nomJ2 + " : " + placar.JOGADOR_2;
    

         }
    

    }


}

let limpar = function(){
   for(let limpeza = 1; limpeza < 10; limpeza ++){
       document.getElementById(limpeza).innerHTML="";
   }
      for(let reinicio = 0; reinicio < 3; reinicio ++ ){
          tabuleiro[ reinicio] = new Array (3).fill(0);
      }
}


var VerificaVitoriaX = function(){
    let vencedor = [
        0,0,0,0,0,0,0,0
    ];
    for(let i = 0; i < 3; i++){
        for( let j = 0; j< 3; j++){
            vencedor[i] += tabuleiro[i][j];
            vencedor[3 + j] += tabuleiro[i][j];
            if( i == j){
                vencedor[6] += tabuleiro[i][j];
            }  
            if( 2-j == i){
                vencedor[7] += tabuleiro[i][j]
            }
        }
    }
    for(let valor of vencedor){
        if(Math.abs(valor) == 3){
            return( valor > 0 ) ?velha.JOGADOR_1 : velha.JOGADOR_2; 
        }
    }
 
};


let trocaJogador = function() {
if (player == velha.JOGADOR_1){
    player = velha.JOGADOR_2;
}
else {
    player = velha.JOGADOR_1;
}

}