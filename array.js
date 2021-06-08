//for loop challenge
/*
let foods = ["apple", "orange", "rice", "bread", "tofu"]

for (let i = foods.length - 1; i > -1; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let titleCasedWord = titleCase(word)
       // console.log(titleCasedWord)
    }
}


function titleCase(word){
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)
    return first_letter + rest
}

//for..of loop challenge

let allergies = ["gluten", "soy"]

for (let food of foods){
    console.log(food, foodLengthCheck(food), foodAlergyCheck(food))

    let longWordResult = foodLengthCheck(food) ? "" : "not"
    let response = `${food} is ${longWordResult}a long word, and you ${foodAllergyCheck(food).toLocaleLowerCase()} it with your allergies.`
    console.log(response) 
}

function foodLengthCheck(food){
    return food.length > 4
}

function foodAlergyCheck(food){
    allergyMap = {
        bread : "gluten",
        tofu : "soy"
    }

    let allergyLookup = allergyMap[food]

    if (allergies.includes(allergyLookup)) {
        return "You can't eat"
    } else {
        return "You can eat"
    }
} 
*/
//array push challenge

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while(cards.length > 0){
    let card = cards.pop()
    if (typeof card == "string"){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}
console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    switch(card){
        case "A":
        case "K":
        case "Q":
        case "J":
            result = true
            break
        default:
            result = false
    }
    return result
}