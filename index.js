let guess = Math.floor(Math.random()*100 + 1)
console.log(guess)

let count = 0
let game_status = 1

const hints = document.getElementById('hint')
const attempts = document.getElementById('attempt')

function check(){
    if(game_status == 1){
    let val = document.forms[0]['val'].value
    count++

    if(val == guess){
        hints.innerHTML = 'Guess is Correct'
        document.getElementById('check_btn').innerHTML = 'Reset'
        game_status = 0
    }
    else if(val < guess){
        hints.innerHTML = 'Guess is Lower'
    }
    else{
        hints.innerHTML = 'Guess is Higher'
    }
    attempts.innerHTML = 'Attempts :' + count
    }
    else{
        reset()
        game_status = 1
    }
}


function reset(){
    guess = Math.floor(Math.random()*100 + 1)
    console.log(guess)
    document.getElementById('check_btn').innerHTML = 'Change'
    count = 0
    attempts.innerHTML = 'Attempts :' + count
}