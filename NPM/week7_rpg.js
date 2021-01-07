const readlineSync = require('readline-sync')

const name = readlineSync.question("What is your name? ")

readlineSync.question("Hello " + name + " Welcome to HALO! Where you must svae the human race by risking your life to defeat the evil covanant. Press ENTER to begin.")

const enemies = ["Grunt","Elite","Jackal","Hunter","Flood"]

const itemDrops = ["Medkit","Grenade","Plasma Grenade","Key"]

var prize = []

let userHealth = 40

const options = ['Walk', 'Exit', 'Inventory']

let loot = itemDrops[Math.floor(Math.random() * itemDrops.length)]

function game(){
    const attackPower = Math.floor(Math.random() * 9)
    const enemy = enemies[Math.floor(Math.random() * enemies.length)]
    let enemyHealth = 3
    const enemyPower = Math.floor(Math.random() * 1 )

    const index =  readlineSync.keyInSelect(options, "What would you like to do next? " )

    if(options[index] == "Exit"){
        return userHealth = 0
    } else if (options[index] == "Inventory"){
        console.log(name + ": \n" + userHealth + "\nItems: " + loot)
    } else if (options[index] === "Walk" ) {
        let key = Math.random()
        if (key <= .3){
            console.log("Walking.....")
        } else if (key >= .3) {
            console.log(enemy + " showed up.")
            
            while(enemyHealth > 0 && userHealth > 0){
                
                const user = readlineSync.question("What do you want to do 'R' to run or 'A' to attack: ")

                switch (user){
                    case "r":
                        const run = Math.random()
                      if (run <.5) {
                        console.log("Before you can try to retreat " + enemy + " attacks you for: " + enemyPower + " HP!")
                    } else {
                        console.log("You got away!")
                        break
                    }
                    case "a":
                        enemyHealth -= attackPower
                        console.log("You Shoot at " + enemy + " for " + attackPower + " HP!")

                        userHealth -= enemyPower
                        console.log(enemy + " just attacked you for " + enemyPower + " HP!")

                        if (enemyHealth <= 0){
                            console.log("you killed "+ enemy + "\n" + enemy + " dropped " + loot)
                            let drop = Math.random()
                            if(drop <= .3){
                                prize.push(loot)

                            } 

                        } else if(userHealth <= 0){
                            console.log(enemy + " has defeated you. The Covanant wins.")
                        }

                }

            }
        }
            
    } 
}


while(userHealth > 0){
    userRestore = function(){
        userActive = true
        userHealth = 40
    }
    userRestore()
    game()
}