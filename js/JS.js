// guessing game
  
'use strict';
var yourPoints = 0;

var gistName = prompt(
    'hello, welcome to my profile, could you please tell me your name?'
);
// if the user insert invaled or number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistName))) {
    gistName = prompt(' please use letters.Could you please tell me your name?');
}
alert(' Are you a Potter head?');

 alert(' Welcome' + ' ' + gistName + ' ' + 'to my profile');
 
//first question

function firstQuestion(){
    var firstQ = prompt('Do you think I am a potter head?').toUpperCase();
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
            break;
        case 'N':
        case 'NO':
            alert('Hmmm :(, No I Love Harry Potter from my bottom of my heart');
    }
}
firstQuestion();

function secondQuestion(){
    var hostHoppy = prompt(
        gistName + ' ' + 'Do I like to watch Sports matches?! (yes/no)'
    ).toLowerCase();
    // if the user insert number value, while, do and parseInt will solve the problem
    while (
        hostHoppy !== 'y' &&
        hostHoppy !== 'yes' &&
        hostHoppy !== 'n' &&
        hostHoppy !== 'no'
    ) {
       
        hostHoppy = prompt('Remember its a Yes/No question\nQuestion - > Do I like to watch Sports matches?!').toLowerCase();
    }
     // // points counter (to count how many correct answers the user do)
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
            break;
        default:
            alert('yes I don\'t like watching Sports matches');
    }
}
secondQuestion();



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
        } else if (hostAge === 22) {
            alert('yes! you are Right');
            yourPoints += 1;
            break;
        } else if (hostAge >= 30) {
            alert('NO NO NO NO , too old  , Try Again');
        } else if (25 < hostAge < 30) {
            alert('getting close, keep trying');
        }
    }
    alert('I am 22 years old');
 }
thirdQuestion();

function fourthQuestion(){
    var questions = [
        'Do You Think My Best character on HarryPotter Movie is Severus Snape? (yes/no)',
        'Do You Think I hate James Potter (Harry Potter Dad)? (yes/no)',
     
    ];
    var answers = ['yes I am', 'you are wrong'];
    
    for (var i = 0; i < questions.length; i++) {
        var getQuestions = questions[i];
    
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
fourthQuestion();



function sixthQuestion(){
// Q -> 6
var sixQ = prompt('Do you think Harry Potter is one of my best movies?').toUpperCase();
while (
    sixQ !== 'N' &&
    sixQ !== 'NO' &&
    sixQ !== 'YES' &&
    sixQ !== 'Y'
) {
    sixQ = prompt('Remember its a YES or NO question \n Question -> Do you think Harry Potter is one of my best movies?');

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
sixthQuestion();

function seventhQuestion(){
    var sevenQ = prompt(
        gistName + ' ' + 'Do you think I Like coding? (yes/no)'
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
seventhQuestion();

alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 7 Congrats !!!');
