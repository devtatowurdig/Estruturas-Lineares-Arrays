let vetor = new Array(5).fill(null);

let contador = 0;

function inserir(numero){
    if(contador >= vetor.length){
        console.log("Erro: Overflow de Memória")
        vetor = expandir(vetor)
    } 
        vetor[contador] = numero
        contador++
        console.log(`Itens: ${contador} | Capacidade Real: ${vetor.length}`)
}

function expandir(vetor){
    let v2 = new Array(vetor.length * 2)

    for (let i = 0; i < vetor.length; i++){
        v2[i] = vetor[i]
    }
    return v2
}


for(let i = 1; i < 100; i++){
    inserir(i)
}

console.log(vetor);


