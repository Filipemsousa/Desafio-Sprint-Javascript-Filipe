
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){
        // 1. Verifica se o carro já existe no array    
        const position = GetCarArrPosition(carArr, carClass);   
        if(el.checked){
            // Vamos ajustar para o máximo de 2 para alinhar com o HTML existente.
            const MAX_CARS_COMPARE = 2; 

            if(position === -1 && carArr.length < MAX_CARS_COMPARE){ 
                carArr.push(carClass); // Adiciona o carro ao array
                console.log(`Carro ${carClass.nome} adicionado para comparação.`);
            }  else if (carArr.length >= MAX_CARS_COMPARE) {
                // Opção para não permitir mais de N carros
                alert(`Máximo de ${MAX_CARS_COMPARE} carros para comparação atingido!`);
                el.checked = false; // Desmarca o elemento
            
        } else {
            // Se o carro for desmarcado (unchecked)
            if(position !== -1){
                carArr.splice(position, 1); // Remove o carro do array
                console.log(`Carro ${carClass.nome} removido da comparação.`);
            }
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
