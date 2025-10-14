
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
        if(el.checked){
            carArr.push(carClass);

        } else {
          const pos = GetCarArrPosition(carArr,carClass);
          if(pos >-1){
            carArr.splice(pos,1);
          }
        } 
    } else {
        throw "You need set a Car Class";
    }
}
   

function ShowCompare() {
    if(carArr.length !== 2) {
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
    const car1 = carArr[0];
    const car2 = carArr[1];
    document.querySelector("#compare_image_0").innerHTML = `<img src="${car1.image}" alt="">`;
    document.querySelector("#compare_image_1").innerHTML = `<img src="${car2.image}" alt="">`;
    
    document.querySelector("#compare_modelo_0").innerHTML = `<p>${car1.nome}</p>`;
    document.querySelector("#compare_modelo_1").innerHTML = `<p>${car2.nome}</p>`;
    
    document.querySelector("#compare_alturacacamba_0").innerHTML = `<p>${car1.alturaCacamba}</p>`;
    document.querySelector("#compare_alturacacamba_1").innerHTML = `<p>${car2.alturaCacamba}</p>`;

    document.querySelector("#compare_alturaveiculo_0").innerHTML = `<p>${car1.alturaVeiculo}</p>`;
    document.querySelector("#compare_alturaveiculo_1").innerHTML = `<p>${car2.alturaVeiculo}</p>`;

    document.querySelector("#compare_alturasolo_0").innerHTML = `<p>${car1.alturaSolo}</p>`;
    document.querySelector("#compare_alturasolo_1").innerHTML = `<p>${car2.alturaSolo}</p>`;

    document.querySelector("#compare_capacidadecarga_0").innerHTML = `<p>${car1.capacidadeCarga}</p>`;
    document.querySelector("#compare_capacidadecarga_1").innerHTML = `<p>${car2.capacidadeCarga}</p>`;

    document.querySelector("#compare_motor_0").innerHTML = `<p>${car1.motor}</p>`;
    document.querySelector("#compare_motor_1").innerHTML = `<p>${car2.motor}</p>`;

    document.querySelector("#compare_potencia_0").innerHTML = `<p>${car1.potencia}</p>`;
    document.querySelector("#compare_potencia_1").innerHTML = `<p>${car2.potencia}</p>`;

    document.querySelector("#compare_volumecacamba_0").innerHTML = `<p>${car1.volumeCacamba}</p>`;
    document.querySelector("#compare_volumecacamba_1").innerHTML = `<p>${car2.volumeCacamba}</p>`;

    document.querySelector("#compare_roda_0").innerHTML = `<p>${car1.roda}</p>`;
    document.querySelector("#compare_roda_1").innerHTML = `<p>${car2.roda}</p>`;

    document.querySelector("#compare_preco_0").innerHTML = `<p>${car1.preco}</p>`;
    document.querySelector("#compare_preco_1").innerHTML = `<p>${car2.preco}</p>`;

}
