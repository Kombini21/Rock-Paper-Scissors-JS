
function computer_Choice() {

    let x = Math.floor(Math.random() * 3) + 1;
            
    switch(x) {

        case 1:
            return "Paper"
            break;
                
        case 2:
            return "Rock"
            break;

        case 3:
            return "Scissors"
            break;
    }
            
}

function user_Choice(y) {

        switch(y) {

            case 1:
                        
                return "Paper" 
                break;
                    
            case 2:
                        
                return "Rock" 
                break;

            case 3:
                        
                return "Scissors"
                break;

            default:
                break;
        }

            
}

    
function compare_Choices(x,y) {

            
    if (x == "Rock" && y == "Paper"  || x == "Paper" && y == "Scissors" || x == "Scissors" && y == "Rock" ) {
               
                
        console.log(`You lost, you choice was ${x}, the computer ${y}, you won ${wincount} times.`)
        showHead.innerHTML = "class"
        
               

    } else if (x == "Rock" && y == "Scissors"  || x == "Paper" && y == "Rock" || x == "Scissors" && y == "Paper" ) {
                
        wincount = ++wincount
        console.log(`You won, you choice was ${x}, the computer ${y}, you won ${wincount} times.`)
                

    } else if (x == "Rock" && y == "Rock"  || x == "Paper" && y == "Paper" || x == "Scissors" && y == "Scissors" ) {
                
                
        console.log(`Its a draw, you choice was ${x}, the computer ${y}, you won ${wincount} times.`)


    }
}







let wincount = 0

    const wrapper = document.getElementById('moving');
    const showHead = document.getElementById('showinghead1');

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

        if (wincount == 5) {
            wincount = 0 
        }

        })





      


        


