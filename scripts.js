
function computer_Choice() {

    let x = Math.floor(Math.random() * 3) + 1;
            
    switch(x) {

        case 1:
            return "papel"
            break;
                
        case 2:
            return "pedra"
            break;

        case 3:
            return "tesoura"
            break;
    }
            
}

function user_Choice(y) {

        switch(y) {

            case 1:
                        
                return "papel" 
                break;
                    
            case 2:
                        
                return "pedra" 
                break;

            case 3:
                        
                return "tesoura"
                break;

            default:
                break;
        }

            
}

function return_Userimage(x){

    if (x == "pedra") {

        imgUser1.style.backgroundImage = "url('./images/plrock.png')";  
    }else if ( x == "papel") {

        imgUser1.style.backgroundImage = "url('./images/plpaper.png')";  
    }else if ( x == "tesoura") {

        imgUser1.style.backgroundImage = "url('./images/plscissors.png')";  
    }

}

function return_pcImage(y){

    if (y == "pedra") {

        imgPc1.style.backgroundImage = "url('./images/plrock.png')";  
    }else if ( y == "papel") {

        imgPc1.style.backgroundImage = "url('./images/plpaper.png')";  
    }else if ( y == "tesoura") {

        imgPc1.style.backgroundImage = "url('./images/plscissors.png')";  
    }

}
    
function compare_Choices(x,y) {

            
    if (x == "pedra" && y == "papel"  || x == "papel" && y == "tesoura" || x == "tesoura" && y == "pedra" ) {
               
                
        console.log(`You lost, you choice was ${x}, the computer ${y}, you won ${wincount} times.`);
        winCountPC = ++winCountPC;
        showHead.innerHTML = "Você perdeu!";
        showWright.innerHTML = `Você escolheu ${x}, o computador ${y}`;
        pcCore.innerHTML = `Score da máquina: ${winCountPC}`;
        return_Userimage(x)
        return_pcImage(y)
        
        
        
        
               

    } else if (x == "pedra" && y == "tesoura"  || x == "papel" && y == "pedra" || x == "tesoura" && y == "papel" ) {
                
        wincount = ++wincount;
        console.log(`You won, you choice was ${x}, the computer ${y}, you won ${wincount} times.`);
        showHead.innerHTML = "Você ganhou!";
        showWright.innerHTML = `Você escolheu ${x}, o computador ${y}`;
        userCore.innerHTML = `Score do jogador: ${wincount}`;
        return_Userimage(x)
        return_pcImage(y)
        
                

    } else if (x == "pedra" && y == "pedra"  || x == "papel" && y == "papel" || x == "tesoura" && y == "tesoura" ) {
                
                
        console.log(`Its a draw, you choice was ${x}, the computer ${y}, you won ${wincount} times.`);
        showHead.innerHTML = "Você empatou!";
        showWright.innerHTML = `Você escolheu ${x}, o computador ${y}`;
        return_Userimage(x)
        return_pcImage(y)
        
        

    }
}







    let wincount = 0
    let winCountPC = 0

    const wrapper = document.getElementById('moving');
    const showHead = document.getElementById('showingHead1');
    const showWright = document.getElementById('showingWrinting');
    const userCore = document.getElementById('playerScore');
    const pcCore = document.getElementById('computerScore');
    const imgUser1 = document.getElementById('imgUser');
    const imgPc1 = document.getElementById('imgPc');

    wrapper.addEventListener('click', (event) => {

        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        let useruChoice = 0;
        let usuChoice = event.target.id;
        if (usuChoice == 'rock') {
                    
            useruChoice = 2;
        }else if (usuChoice == 'paper') {

            useruChoice = 1;
        }else if (usuChoice == 'scissors') {

            useruChoice = 3;
        }

        uzu = user_Choice(useruChoice)
        cpzu = computer_Choice()

        compare_Choices(uzu, cpzu)

        if (wincount == 5 || winCountPC == 5 ) {

            wincount = 0;
            winCountPC = 0;
            pcCore.innerHTML = `Score da máquina: ${winCountPC}`;
            userCore.innerHTML = `Score do jogador: ${wincount}`;
            
        }

        })





      


        


