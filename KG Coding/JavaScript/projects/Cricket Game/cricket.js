function generateRandomNumber(){

    return Math.random()*3;
}



function computerChose(randomNumber){

    if(randomNumber<=1 && randomNumber>=0) console.log('Computer has chosen Bat');
    if(randomNumber<=2 && randomNumber>1) console.log('Computer has chosen Ball');
    if(randomNumber<=3 && randomNumber>2) console.log('Computer has chosen Wicket');

}

function result(randomNumber,yourOption){

    if(yourOption==='Bat'){
        if(randomNumber<1 && randomNumber>=0){
            score.tie++;  
            printScore();
            alert(`Match Draw!!!
                ${score.displayScore()}`);
            
        } 
        if(randomNumber<2 && randomNumber>=1){
            score.win++;
            printScore();
            alert(`You Won the Game !!!
                ${score.displayScore()}`);
            
        }
        if(randomNumber<=3 && randomNumber>=2){
            score.lost++;
            printScore();

            alert(`You lost the Game !!!
                ${score.displayScore()}`);
            
        }
    }
    else if(yourOption==='Ball'){

        if(randomNumber<1 && randomNumber>=0){
            score.lost++;
            printScore();

            alert(` You lost the Game !!!
                ${score.displayScore()}`);
            
        }
        if(randomNumber<2 && randomNumber>=1){
            score.tie++;
            printScore();

            alert(` Match Draw !!!
                ${score.displayScore()}`);
            
        }
        if(randomNumber<=3 && randomNumber>=2){
            
            score.win++;
            printScore();

            alert(`Match Win
            ${score.displayScore()}`);
            
            
        } 

    }
    else{

        if(randomNumber<1 && randomNumber>=0){
            score.win++;
            printScore();
            alert(` You Won the Game!!!
                 ${score.displayScore()}`);
            
        } 
        if(randomNumber<2 && randomNumber>=1){
            score.lost++;
            printScore();

            alert(` You lost the Game !!!
                ${score.displayScore()}`);
            
        }
        if(randomNumber<=3 && randomNumber>=2) {
            score.tie++;
            printScore();
            
            alert(`Match Draw !!!
                ${score.displayScore()}`);

            
        }
    }
    

}
function printScore(){
    console.log(`Win:${score.win},Lost:${score.lost},Tie:${score.tie}`)
}


function game(yourOption){

    console.log(`You have chosen ${yourOption}`);

    randomNumber=generateRandomNumber();
    computerChose(randomNumber);
    result(randomNumber,yourOption);
}

let score={
    win:0,
    lost:0,
    tie:0,

    displayScore(){

        return `Win:${this.win},Lost:${this.lost},Tie:${score.tie}`;

    },
};

