  
'use strict';
var yourPoints = 0;

var gistName = prompt(
    'hello, welcome to my profile, could you please tell me your name?'
);
while (!isNaN(parseInt(gistName))) {
    gistName = prompt(' please use letters.Could you please tell me your name?');
}

prompt(' Are you a Potter head?');

 alert(' Welcome' + ' ' + gistName + ' ' + 'to my profile');
 //console.log('Welcome' + ' ' + gistName + ' ' + 'to my profile');

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
            //console.log('that\'s correct,' + '  ' + gistName + ' '+ 'I am a big big big Potter fan :) ');
            yourPoints+=1;

            break;
        case 'N':
        case 'NO':
            alert('Hmmm :(, No I Love Harry Potter from my bottom of my heart');
            //console.log('Hmmm :(, No I Love Harry Potter from my bottom of my heart');

    }
}
firstQuestion();

function secondQuestion(){
    var hostHoppy = prompt(
        gistName + ' ' + 'Do I like to watch Sports matches?! (yes/no)'
    ).toLowerCase();
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
var sixQ = prompt('Do you think Harry Potter is one of my best movies?').toUpperCase();
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

var hatedChar = ['Voldemort','Draco','James Potter','Belatrix'];

function hatChar() {
var gistAnswer = prompt('whose is the worst one im my opinion ?' +  "'Albus Dambuldor'\r\n'Severus Snape'\r \n,'Serious Black' \r \n,'Voldemort'\r \n,'Draco'\r \n,'James Potter'\r \n,'Belatrix'\r \n,'Ron'\r \n").toLowerCase();
var attemptNum = 0;
        
for(var x= 0;x <=attemptNum;x++){
for (var j = 0; j < hatedChar.length; j++) {
            if (gistAnswer === hatedChar[j].toLowerCase()) {
                alert('yes, I hate'+gistAnswer);
                alert('great! you got a golden point, But Do you know what!');
                alert('I hate James Potter the most!')
                yourPoints += 1;
                break;
            } 
            
            else {
                attemptNum = attemptNum + 1;
                         }
        }

     
    }
}

hatChar();


alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 8 Congrats !!!');
