import rl from "readline-sync"

const phrases = [
    { wrong: "She go home.", right: "She goes home." },
    { wrong: "I has a dog.", right: "I have a dog." },
    { wrong: "They is happy.", right: "They are happy." },
    { wrong: "He don't know.", right: "He doesn't know." },
    { wrong: "We was late.", right: "We were late." },
    { wrong: "The cat eat fish.", right: "The cat eats fish." },
    { wrong: "I goed there.", right: "I went there." },
    { wrong: "She have a car.", right: "She has a car." },
    { wrong: "My friend are here.", right: "My friend is here." },
    { wrong: "It don't work.", right: "It doesn't work." },
    { wrong: "He can sings.", right: "He can sing." },
    { wrong: "I am agree.", right: "I agree." },
    { wrong: "She like pizza.", right: "She likes pizza." },
    { wrong: "We enjoys games.", right: "We enjoy games." },
    { wrong: "They was tired.", right: "They were tired." },
    { wrong: "I seen that.", right: "I saw that." },
    { wrong: "He do his work.", right: "He does his work." },
    { wrong: "The dogs barks.", right: "The dogs bark." },
    { wrong: "She walk to school.", right: "She walks to school." },
    { wrong: "We has time.", right: "We have time." }
  ];
let answer
let counter = 1

function getAnswer() {
    answer = rl.question('Write the right sentence: ')
}

function finish(){
    console.clear()
    console.log(`
    Congrats!!!
    You finish the game!!
    `)
}
function showPhrase() {
    console.clear()
    for (let phrase of phrases){
        console.clear()
        console.log(`
        Sentence ${counter}/${phrases.length}
        Rewrite the sentence correcting the grammatical error.
        
        ==============
        ${phrase.wrong}
        ==============
        `)
        getAnswer()
        while (answer.toLowerCase() !== phrase.right.toLowerCase()){
            console.log('\nTente novamente\n')
            getAnswer()
        }
        console.log(`
        Congratulations!!
        Right sentence: "${phrase.right}"
        `)
        counter++
    }
}
function start() {
    console.clear()
    console.log(`
    You are Welcome to Error Detector!
    Let's go improve and test your English level!
    `)
    
    let continuar = rl.question("Press ENTER to continue...")
    
    showPhrase()
}
start()