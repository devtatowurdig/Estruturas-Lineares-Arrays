const vetor = new Array(50).fill(null);

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * 3);
}

const vetorComDuplicatas = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 10, 11, 12, 12, 14, 20, 20];

function vetorEsparso(vetor) {
    let elementosZero = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === 0) {
            elementosZero++;
        }
    }

    if (elementosZero / vetor.length >= 0.7) {
        console.log("Vetor Ineficiente: Recomenda-se compressão");
    }
}

function uniqueVetor(vetor) {
    let tamanho = vetor.length;

    for (let i = 0; i < tamanho; i++) {
        if (vetor[i] === vetor[i + 1]) {
            for (let j = i + 1; j < tamanho - 1; j++) {
                if (vetor[i] == null) {
                    break;
                }
                
                vetor[j] = vetor[j + 1];
            }

            tamanho--

            vetor[tamanho] = null;
        }
    }
}


vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
vetorB = [4, 5, 6, 7, 8, 10, 11, 12, 13, 14];

function mergeDeOrdenados(vetorA, vetorB){

    let i = 0
    let j = 0
    let vetorC = []

    while(i < vetorA.length && j < vetorB.length){
        if(vetorA[i] < vetorB[j]) {
            vetorC.push(vetorA[i])
            i++
        } else {
            vetorC.push(vetorB[j])
            j++
        }
    }

    while(i < vetorA.length){
        vetorC.push[i]
        i++
    }

    while(j < vetorB.length){
        vetorC.push[j]
        j++
    }


    return vetorC
}



