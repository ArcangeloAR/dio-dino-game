const sonic = document.querySelector('.sonic');
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping){
        jump();
        }
    }
}

function jump() {

    
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150 ) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                sonic.style.bottom = position + 'px';
                }
            }, 20);
        } else {

        }
        position += 20;

        sonic.style.bottom = position + 'px';
    }, 20); //será executado a cada 20 milisegundos
}

function createEnemie(){
    const enemie = document.createElement('div');
    let enemiePosition = 2000;
    let randomTime = Math.random() * 6000;

    enemie.classList.add('enemie');
    enemie.style.left = 2000 + 'px';
    background.appendChild(enemie);

    let leftInterval = setInterval(() => {
        enemiePosition -=10;
        enemie.style.left = enemiePosition + 'px';

        if (enemiePosition < -60){
            clearInterval(leftInterval);
            background.removeChild(enemie);
        } else if (enemiePosition > 0 && enemiePosition < 36 && position < 60 ){
           
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            enemiePosition -=10;
            enemie.style.left = enemiePosition + 'px';
        }
    }, 20)
    setTimeout(createEnemie, randomTime);
}
createEnemie();
document.addEventListener('keyup', handleKeyUp);
