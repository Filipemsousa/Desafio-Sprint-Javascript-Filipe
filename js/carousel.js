
//carousel

//Array storage class
let carouselArr = [];



//class Carousel
class Carousel {
    constructor(img, texto,link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._arr = arr;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
                const butao_avancar = document.querySelector(".botao_avancar");
                const butao_voltar = document.querySelector(".botao_voltar");
                butao_avancar.addEventListener("click", Carousel.Avancar);
                butao_voltar.addEventListener("click",Carousel.Voltar);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        Carousel.ExibirImagem();   
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static ExibirImagem() {
        const atual = Carousel._arr[Carousel._sequence];
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        carousel.innerHTML = `<img src ="img/${atual.img}" alt="">`;
        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
        
    }

    static Avancar(){
        // 1. Atualiza o _sequence
        // Se for o último slide, volta para o primeiro (0).
        Carousel.ExibirImagem();
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    
        // 2. Renderiza o novo slide

    }
    
    static Voltar(){
        Carousel.ExibirImagem();
        Carousel._sequence--;
        console.log(Carousel._sequence);
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size -1;
        }
    }

  

};
