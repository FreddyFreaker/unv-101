var readlineSync = require('readline-sync')

var playerName = readlineSync.question('What is your name? ')


var introMessage = `Welcome, ${playerName}, welcome to the escape game`

console.log(introMessage)


var isAlive = true

var hasKey= false

while(isAlive == true)

{
    const menueID = readlineSync.keyIn(` Press 1 to put your hand into the hole \n Press 2 to Find the key \n Press 3 to open the door`, {limit: '$<1-3>'})
    if (menueID == 1){
        console.log( `${playerName}, You reach your hand into the hole and seem to fell what you think might be a spider. You then feel a stinging sensation followed by a burn. You die where you stand, GAME OVER`)
        isAlive = false;
    }
    else if (menueID == 2 && hasKey == false){
        console.log(`${playerName}, you rummage around and it lookes like it payed off, you found a little silver key.`)
        hasKey = true
    }
    else if (menueID == 2 && hasKey == true){
        console.log(`${playerName}, youv'e had a look around again and don't find anything important.`)


    }
    else if (menueID == 3 && hasKey == false ){
        console.log(`Looks to be locked you need a key to open this door ${playerName}`)


    }
    else if (menueID == 3 && hasKey == true){
        console.log(`You stick the key into the key hole and turn the key. you hear a loud clunk, and the door opens.\n Congratulations ${playerName}, you escaped unharmed I always knew you could do it.`)
        isAlive = false

    }

}

