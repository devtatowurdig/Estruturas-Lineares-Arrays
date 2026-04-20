let vetor = new Array(16).fill(null);

for(let i = 0; i < vetor.length; i++){
    vetor[i] = Math.floor(Math.random() * 300);
}


function encontrarValorImagem(vetor, linha, coluna){
    
    if (linha >= 4 || linha < 0){
        console.log("Linha inválida")
        return
    }

    if (coluna >= 4 || coluna < 0){
        console.log("Coluna inválida")
        return
    }
    
    const largura = 4
    const indice =  linha * largura + coluna
    
    return vetor[indice]
}

function filtroDeContraste(vetor){
    const vetorNovo = new Array(vetor.length).fill(null);

    for (let i = 0; i < vetor.length; i++){
        let valorCalculado = Math.floor(vetor[i] * 1.2)
        if(valorCalculado > 255){
            valorCalculado = 255
        } 
        vetorNovo[i] = valorCalculado
    }
    
    return vetorNovo
}

function inversaoInPlace(vetor){
    const metadeVetor = Math.round(vetor.length/2)

    for (let i = 0; i < metadeVetor; i++){
        let aux = vetor[i]
        let indiceReverso = (vetor.length - 1) - i
        vetor[i] = vetor[indiceReverso]
        vetor[indiceReverso] = aux
    }

}

