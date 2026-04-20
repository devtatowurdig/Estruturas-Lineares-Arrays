let vetor = new Array(24).fill(null); 

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * 50) + (-15);
}


function temperaturaPorHora(vetor, hora){ 
    if(hora < 0 || hora >= 24) {
        console.log("Hora inválida")
        return
    }

    const temperatura = vetor[hora]

    return `[Hora: ${hora}]: ${temperatura}°C`
}


function existeTemperatura(vetor, valorBuscado){
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] == valorBuscado){
            return(i)
        } 
    }
    return -1
}

function buscaExtremos(vetor){
    let menor = vetor[0];
    let maior = vetor[0];
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }

    return {maior, menor}
}

