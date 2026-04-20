let vetorFixo = new Array(10).fill(null);

function inserirNoInicio(vetor, novoPaciente) {
    let custo = 0;

    for (let i = vetor.length - 2; i >= 0; i--) {
        vetor[i + 1] = vetor[i];
        custo++;
    }
    vetor[0] = novoPaciente;
    console.log(`Custo Inserir no Início: ${custo} vezes`)
}

function inserirNoFinal(vetor, novoPaciente){
    let custo = 0;

    for (let i = 0; i <= (vetor.length - 1); i++) {
        vetor[i] = vetor[i+1];
        custo++
    }
    vetor[(vetor.length - 1)] = novoPaciente
    console.log(`Custo Inserir no Final: ${custo} vezes`)
}

function removerDaPosicao(vetor, indice) {
    let custo = 0;

    if(indice > (vetor.length - 1)){
        console.log("O valor é maior que o tamanho do vetor");
        return
    }

    for (let i = indice; i < vetor.length - 1; i++) {
        vetor[i] = vetor[i + 1];
        custo++
    }
    vetor[vetor.length - 1] = null;

    console.log(`Custo Remover da posição ${indice}: ${custo} vezes`)
}

inserirNoInicio(vetorFixo, "Márcio")
console.log(vetorFixo)
inserirNoInicio(vetorFixo, "Joana")
console.log(vetorFixo)
inserirNoFinal(vetorFixo, "Mateus")
console.log(vetorFixo)
inserirNoFinal(vetorFixo, "Larissa")
console.log(vetorFixo)
removerDaPosicao(vetorFixo, 3)
console.log(vetorFixo)

