const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const tempo = document.querySelector('.pontos');
const pontuacao = document.querySelector('.game-over');
const totalPontos = document.querySelector('.pontuacao');
let tempoAnimacao = 1.5;

var altura = window.screen.height;
var largura = window.screen.width;

if(altura < 900 && largura < 450){

    const jump = ()=>{
        mario.classList.add('jump');
        setTimeout(()=>{
            mario.classList.remove('jump');
        },500)
    }
    
    const loop = setInterval(()=>{
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        
        if(pipePosition <= 30 && pipePosition > 0 && marioPosition < 20 ){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation ='none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './images/game-over.png';
            mario.style.width = '25px';
            mario.style.marginLeft = 'px';
            clearInterval(loop);
    
            pontuacao.style.display='block';
            totalPontos.textContent= ('Pontuação : '+ tempo.textContent);
    
            
        }else if(pipePosition > 30 && marioPosition > 30){
            setTimeout(()=>{
                const tempoJogo = +tempo.textContent;
                const TempoTotalJogo = tempoJogo + 1;
                tempo.textContent = TempoTotalJogo;
            },3000)
            
    
        }
    },10)
    var btn = document.querySelector("#reset");

    btn.addEventListener("click", function() {
        
        location.reload();

    });
    document.addEventListener('touchstart',jump);
}else{
    const jump = ()=>{
        mario.classList.add('jump');
        setTimeout(()=>{
            mario.classList.remove('jump');
        },500)
    }
    
    const loop = setInterval(()=>{
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation ='none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            clearInterval(loop);
    
            pontuacao.style.display='block';
            totalPontos.textContent= ('Pontuação : '+ tempo.textContent);
    
            
        }else if(pipePosition > 150 && marioPosition > 100){
            setTimeout(()=>{
                const tempoJogo = +tempo.textContent;
                const TempoTotalJogo = tempoJogo + 1;
                tempo.textContent = TempoTotalJogo;
            },3000)
            
    
        }
    },10)
    var btn = document.querySelector("#reset");

    btn.addEventListener("click", function() {
        
        location.reload();
    
    });
    
    document.addEventListener('keydown',jump);

}
/*
const jump = ()=>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clearInterval(loop);

        pontuacao.style.display='block';
        totalPontos.textContent= ('Pontuação : '+ tempo.textContent);

        
    }else if(pipePosition > 150 && marioPosition > 100){
        setTimeout(()=>{
            const tempoJogo = +tempo.textContent;
            const TempoTotalJogo = tempoJogo + 1;
            tempo.textContent = TempoTotalJogo;
        },3000)
        

    }
},10)

var btn = document.querySelector("#reset");

btn.addEventListener("click", function() {
    
    location.reload();

});
*/
