//Defines that JavaScript code should be executed in "strict mode".  
'use strict';
//intialize the points.
var yourPoints = 0;
//prompt user name..
var gistName = prompt(
    'hello, welcome to my profile, could you please tell me your name?'
);
// check that the value not null.
while(gistName.length===0 ){
    gistName = prompt('hello, welcome to my profile, could you please tell me your name?');
}
//check that user enter just a letters.
while (!isNaN(parseInt(gistName))) {
    gistName = prompt(' please use letters.Could you please tell me your name?');
}

var ph=prompt(' Are you a Potter head?');
if(ph === 'yes'){
    alert('wow You are my friend from now!'+"  "+gistName);
}
else if(ph === 'no'){
    alert('you missed Alot ' +gistName+'!\r\n read the novels or watch the movies ^.^');

}
 alert(' Welcome' + ' ' + gistName + ' ' + 'to my profile');
 //console.log('Welcome' + ' ' + gistName + ' ' + 'to my profile');
// array of questions.
var questions=
[
    'Do you think I am a potter head?',
    'Do I like to watch Sports matches?! (yes/no)',
    'Do You Think My Best character on HarryPotter Movie is Severus Snape? (yes/no)',
    'Do You Think I hate James Potter (Harry Potter Dad)? (yes/no)',
    'Do you think Harry Potter is one of my best movies?',
    'Do you think I Like coding? (yes/no)'
]


 


// question 1 start
function firstQuestion(){
    var firstQ = prompt(questions[0]).toUpperCase();
    while (
        firstQ !== 'N' &&
        firstQ !== 'NO' &&
        firstQ !== 'YES' &&
        firstQ !== 'Y'
    ) {
        firstQ = prompt('Remember its a YES or NO question \n Question -> Do you think I am a potter head?').toUpperCase();
    }
    
    switch (firstQ) {
        case 'Y':
        case 'YES':
            alert('that\'s correct,' + '  ' + gistName + ' '+ 'I am a big big big Potter fan :) ');
            //console.log('that\'s correct,' + '  ' + gistName + ' '+ 'I am a big big big Potter fan :) ');
            yourPoints+=1;

            break;
        case 'N':
        case 'NO':
            alert('Hmmm :(, No I Love Harry Potter from my bottom of my heart');
            //console.log('Hmmm :(, No I Love Harry Potter from my bottom of my heart');

    }
}
// second question start.
function secondQuestion(){
    var hostHoppy = prompt(
        gistName + ' ' + questions[1] ).toLowerCase();
    while (
        hostHoppy !== 'y' &&
        hostHoppy !== 'yes' &&
        hostHoppy !== 'n' &&
        hostHoppy !== 'no'
    ) {
       
        hostHoppy = prompt('Remember its a Yes/No question\nQuestion - > Do I like to watch Sports matches?!').toLowerCase();
    }
     switch (hostHoppy) {
        case true:
        case 'n':
        case 'no':
            alert('no I don\'t');
            alert('Congrats');
            yourPoints += 1;
            break;
        case false:
        case 'y':
        case 'yes':
        
            alert(
                'Sooooo sorry, but I don\'t like to watch Sports matches'
            );
           // console.log('Sooooo sorry, but I don\'t like to watch Sports matches');
            break;
        default:
            alert('yes I don\'t like watching Sports matches');
            //console.log('yes I don\'t like watching Sports matches');

    }
}
// third question start.
function fourthQuestion(){
    var questionsFour = [
        questions[2],
        questions[3],
     
    ];
    var answers = ['yes I am', 'you are wrong'];
    
    for (var i = 0; i < questionsFour.length; i++) {
        var getQuestions = questionsFour[i];
    
        var questionShown = prompt(gistName + ' ' + getQuestions);
    
        while (
            questionShown !== 'y' &&
            questionShown !== 'yes' &&
            questionShown !== 'n' &&
            questionShown !== 'no'
         
        ) {
            questionShown = prompt('Answer by (yes / no) :),Questions - > +'+getQuestions);
        }
        var gistAnswer_3 = questionShown.toUpperCase();
         switch (gistAnswer_3) {
            case 'Y':
            case 'YES':
          
                alert('great answer' + ' ' + answers[0]);
                alert('You have got a point, congrats');
                yourPoints += 1;
                break;
            case 'N':
            case 'NO':
     
                alert('sorry, but' + ' ' + answers[1]);
                break;
            default:
                alert('Hmmm You don\'t know me ');
        }
    }
}


// fourth question start.
function sixthQuestion(){
    var sixQ = prompt(questions[4]).toUpperCase();
    while (
        sixQ !== 'N' &&
        sixQ !== 'NO' &&
        sixQ !== 'YES' &&
        sixQ !== 'Y'
    ) {
        sixQ = prompt('Remember its a YES or NO question \n Question -> Do you think Harry Potter is one of my best movies?').toUpperCase();
    
    switch (sixQ) {
        case 'Y':
        case 'YES':
            alert('that\'s correct,' + '  ' + gistName + ' '+ 'I have watched all the series ');
            yourPoints += 1;
            break;
        case 'N':
        case 'NO':
            alert('Not correct I am the bigger fan');
    }
    }}

    function seventhQuestion(){
        var sevenQ = prompt(
            gistName + ' ' + questions[5]
        ).toLowerCase();
         while (
            sevenQ !== 'y' &&
            sevenQ !== 'yes' &&
            sevenQ !== 'n' &&
            sevenQ !== 'no'
        ) {
           
            sevenQ = prompt('Remember its a Yes/No question\nQuestion - > Do you think I Like coding?').toLowerCase();
        }
        switch (sevenQ) {
            case true:
            case 'y':
            case 'yes':
                alert('Yaaa , you are right I Like coding');
                alert('Congrats');
                yourPoints += 1;
                break;
            case false:
            case 'no':
            case 'n':
            
                alert(
                    'Sorry but that\'s my dream '
                );
                break;
            default:
                alert('Yaaa , I like coding');
        }
    }
    var functions=
    [
        firstQuestion(),
        secondQuestion(),
        fourthQuestion(),
        sixthQuestion(),
        seventhQuestion()

    ]
for(var i=0;i<functions.length;i++){
    functions[i];
}





// age question start
function thirdQuestion() {
    for (var Age = 0; Age < 6; Age++) {
        var hostAge = parseInt(
            prompt(gistName + ' ' + 'Could you please guess my age')
        );
        while (isNaN(hostAge)) {
            hostAge = parseInt(prompt('Enter my age here'));
        }
        if (hostAge <= 10) {
            alert('NO NO NO NO, too young ');
            //console.log('NO NO NO NO, too young ');

        } else if (hostAge === 22) {
            alert('yes! you are Right');
            //console.log('yes! you are Right');

            yourPoints += 1;
            break;
        } else if (hostAge >= 30) {
            alert('NO NO NO NO , too old  , Try Again');
          ///  console.log('NO NO NO NO , too old  , Try Again');

        } else if (25 < hostAge < 30) {
            alert('getting close, keep trying');
           // console.log('getting close, keep trying');

        }
    }
    alert('I am 22 years old');
 }
thirdQuestion();


// choose right answers from array.
function questionSeven() {
    var hatedChar = ['Voldemort','Draco','James Potter','Belatrix'];

// for loop to make it 6 tries.
    for (var i = 0; i < 6; i++) {
        var gistAnswer = prompt('whose is the worst one im my opinion ?' +  "'Albus Dambuldor'\r\n'Severus Snape'\r \n,'Serious Black' \r \n,'Voldemort'\r \n,'Draco'\r \n,'James Potter'\r \n,'Belatrix'\r \n,'Ron'\r \n").toLowerCase();
// for loop to enter inside the array of hatedchars.
        for (var j = 0; j < hatedChar.length; j++){
            //keep checking the guest answer till one of the array values are true.
            if (gistAnswer === hatedChar[j].toLowerCase()) {
                alert('Congrats you got it right!!!');
                alert('yes, I hate'+ ' '+gistAnswer);
                // if guest enter any other value except "James Potter" the if statement the if will run.
                if(gistAnswer != 'James Potter'.toLowerCase()){
                alert('great! you got a golden point, But Do you know what!');
                alert('I hate James Potter the most!')
                }
                yourPoints++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Oh Oh So Sorry but I Like'+'  '+gistAnswer);
        }
    }
}

questionSeven();
 // guess number game function start here.
function guessNumberGame()
{
    var lowerLimit = 1;
    var upperLimit = 100;
    var tries =7 ;
    // choose number randomly between the lower and upper limit .
    var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    var guess = '';
    var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';
    var userTry=0;    
    // Keep prompting the user for a guess until the game ends.
    while (tries > 0) {
        // Prompt the user for a guess.
        guess = prompt(message);
        
        // If the cancel button was pushed, let the user know the game is ending and
        // break out of the loop.
        if (guess == null) {
            alert('Quitting game now.');
            break;
        }
        // If the guess is a number.
        else if (isFinite(guess) && guess != '') {
            // Make sure the guess is converted into a number.
            guess = +guess;
            
            // If the guess is less than the range let the user know.
            if (guess < lowerLimit) {
                alert('Your guess should be no less than ' + lowerLimit + '.');
                userTry++;
            }
            // If the guess is greater than the range let the user know.
            else if (guess > upperLimit) {
                alert('Your guess should be no greater than ' + upperLimit + '.');
                userTry++;
            }
            // If the guess is too high let the user know.
            else if (guess > answer) {
                alert('Your guess is higher than the value.');
                userTry++;
            }
            // If the guess is too low let the user know.
            else if (guess < answer) {
                alert('Your guess is lower than the value');
                userTry++;
            }
            // If none of the other cases were true that means the answer must have
            // been guessed so let the user know and break out of the loop.
            else {
                alert('Great job, you got it! \r\n with '+' '+userTry+' tries!' );
                break;
            }
        }
        // If the guess is not a number, let the user know.
        else {
            alert('You must enter a number as a guess.');
        }
        
        tries = tries - 1;
    }
    
    if (tries == 0) {
        alert('You ran out of tries. \r\n you have tried for'+ userTry +'\r\n  The number was ' + answer + '.');
    }
}



if(yourPoints >=4)
{
alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 8 Congrats !!!');
}
else if(yourPoints <4 ){
    alert('you have owned ' + ' ' + yourPoints + ' ' + 'You Don\'t even close to know me ');
    alert('Any way I will be happy if you\'ll be my friend and you can try again after reading the website' );
    


}
alert('Welcome to my Simple website!');

var game = prompt('would you want to play a game with me! '+gistName+'😀😀').toLowerCase();

if(game === 'yes' || game === 'y'){
    alert('great! let\'s go!');
    alert('My game called Guess the number!\r\n you need to guess a number between (1 & 100)\r\n you\'ll have just seven(7) attempts!');
guessNumberGame();
}
else if(game === 'no' || game === 'n' ){
    alert('OK! but it\'s really fun' );

}
else{
    while(game.length==0 ){
    game = prompt('would you want to play a game with me! '+gistName+'😀😀');
    }
}
