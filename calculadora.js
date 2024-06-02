function calculadora(vitorias = 57, derrotas = 5){
    // let vitorias = 40;
    // let derrotas = 10;
    let saldoDeRankeadas = vitorias - derrotas;
    let nivel;

    if(saldoDeRankeadas < 10){
        nivel = "Ferro"

    }else if(saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20){
        nivel = "Bronze"

    }else if(saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50){
        nivel = "Prata"

    }else if(saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80){
        nivel = "Ouro"

    }else if(saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90){
        nivel = "Diamante"

    }else if(saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100){
        nivel = "Lendário"

    }else{
        nivel = "Imortal"
    }

    console.log("O herói tem saldo de " + saldoDeRankeadas + " e está no nível de " + nivel )

}


calculadora();