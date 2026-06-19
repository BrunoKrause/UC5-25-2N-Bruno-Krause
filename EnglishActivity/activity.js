import rl from "readline-sync"

const verbTenses = [
    {
      tense: "Simple Present",
      phrases: [
        { wrong: "She go to school.", right: "She goes to school." },
        { wrong: "He have a car.", right: "He has a car." },
        { wrong: "They is happy.", right: "They are happy." },
        { wrong: "I has a dog.", right: "I have a dog." },
        { wrong: "The cat eat fish.", right: "The cat eats fish." },
        { wrong: "We enjoys music.", right: "We enjoy music." },
        { wrong: "She like pizza.", right: "She likes pizza." },
        { wrong: "He don't know.", right: "He doesn't know." },
        { wrong: "It don't work.", right: "It doesn't work." },
        { wrong: "My friend are here.", right: "My friend is here." },
        { wrong: "The dogs barks loudly.", right: "The dogs bark loudly." },
        { wrong: "She walk every day.", right: "She walks every day." },
        { wrong: "We was busy.", right: "We are busy." },
        { wrong: "He do his homework.", right: "He does his homework." },
        { wrong: "The teacher explain well.", right: "The teacher explains well." }
      ]
    },
  
    {
      tense: "Simple Past",
      phrases: [
        { wrong: "I goed to the park.", right: "I went to the park." },
        { wrong: "She buyed a book.", right: "She bought a book." },
        { wrong: "They was late.", right: "They were late." },
        { wrong: "He seen the movie.", right: "He saw the movie." },
        { wrong: "We eated dinner.", right: "We ate dinner." },
        { wrong: "She writed a letter.", right: "She wrote a letter." },
        { wrong: "The children runned fast.", right: "The children ran fast." },
        { wrong: "I taked the bus.", right: "I took the bus." },
        { wrong: "He goed home early.", right: "He went home early." },
        { wrong: "They comed yesterday.", right: "They came yesterday." },
        { wrong: "She drinked coffee.", right: "She drank coffee." },
        { wrong: "We was tired.", right: "We were tired." },
        { wrong: "He gived me a gift.", right: "He gave me a gift." },
        { wrong: "I speaked to her.", right: "I spoke to her." },
        { wrong: "She singed beautifully.", right: "She sang beautifully." }
      ]
    },
  
    {
      tense: "Present Continuous",
      phrases: [
        { wrong: "She are studying now.", right: "She is studying now." },
        { wrong: "They is playing football.", right: "They are playing football." },
        { wrong: "I am watch TV.", right: "I am watching TV." },
        { wrong: "He are working today.", right: "He is working today." },
        { wrong: "We is learning English.", right: "We are learning English." },
        { wrong: "The baby are sleeping.", right: "The baby is sleeping." },
        { wrong: "She is cook dinner.", right: "She is cooking dinner." },
        { wrong: "They are play basketball.", right: "They are playing basketball." },
        { wrong: "I is reading a book.", right: "I am reading a book." },
        { wrong: "He am driving home.", right: "He is driving home." },
        { wrong: "We are study for the test.", right: "We are studying for the test." },
        { wrong: "The dog are barking.", right: "The dog is barking." },
        { wrong: "She am talking on the phone.", right: "She is talking on the phone." },
        { wrong: "They is waiting outside.", right: "They are waiting outside." },
        { wrong: "I am write an email.", right: "I am writing an email." }
      ]
    },
  
    {
      tense: "Future",
      phrases: [
        { wrong: "I will goes tomorrow.", right: "I will go tomorrow." },
        { wrong: "She will studies later.", right: "She will study later." },
        { wrong: "They will comes soon.", right: "They will come soon." },
        { wrong: "He will buys a car.", right: "He will buy a car." },
        { wrong: "We will travels next week.", right: "We will travel next week." },
        { wrong: "I will watches the game.", right: "I will watch the game." },
        { wrong: "She will writes a letter.", right: "She will write a letter." },
        { wrong: "They will eats dinner.", right: "They will eat dinner." },
        { wrong: "He will plays football.", right: "He will play football." },
        { wrong: "We will visits our friends.", right: "We will visit our friends." },
        { wrong: "I will takes the train.", right: "I will take the train." },
        { wrong: "She will sings tomorrow.", right: "She will sing tomorrow." },
        { wrong: "They will drinks coffee.", right: "They will drink coffee." },
        { wrong: "He will learns French.", right: "He will learn French." },
        { wrong: "We will arrives early.", right: "We will arrive early." }
      ]
    }
  ];
let answer
let counter = 1
let selectedTense 

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
    
    switch (selectedTense) {
        case 1:
            for ( let phrase of verbTenses[0].phrases) {
                console.clear()
                console.log(`
                (${verbTenses[0].tense})
                Sentence ${counter}/${verbTenses[0].phrases.length}
                Rewrite the sentence correcting the grammatical error.

                ===============
                ${phrase.wrong}
                ===============
                `)
                getAnswer()
                while (answer.toLowerCase() !== phrase.right.toLowerCase()){
                    console.log('\nTry Again\n')
                    getAnswer()
                }
                console.log(`
                Congratulations!!
                Right sentence: "${phrase.right}"
                `)
                let continuar = rl.question('Press ENTER to next...')
                counter++
            }
            break
        case 2:
            for ( let phrase of verbTenses[1].phrases) {
                console.clear()
                console.log(`
                (${verbTenses[1].tense})
                Sentence ${counter}/${verbTenses[1].phrases.length}
                Rewrite the sentence correcting the grammatical error.

                ===============
                ${phrase.wrong}
                ===============
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
                let continuar = rl.question('Press ENTER to next...')
                counter++
            }
            break
        case 3:
            for ( let phrase of verbTenses[2].phrases) {
                console.clear()
                console.log(`
                (${verbTenses[2].tense})
                Sentence ${counter}/${verbTenses[2].phrases.length}
                Rewrite the sentence correcting the grammatical error.

                ===============
                ${phrase.wrong}
                ===============
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
                let continuar = rl.question('Press ENTER to next...')
                counter++
            }
            break
        case 4:
            for ( let phrase of verbTenses[3].phrases) {
                console.clear()
                console.log(`
                (${verbTenses[3].tense})
                Sentence ${counter}/${verbTenses[3].phrases.length}
                Rewrite the sentence correcting the grammatical error.

                ===============
                ${phrase.wrong}
                ===============
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
                let continuar = rl.question('Press ENTER to next...')
                counter++
            }
            break
    }
}
function selectTense() {
    console.log(`
    Select the VerbTense that you want test:

    1- Simple Present
    2- Simple Past
    3- Present Continous
    4- Future
    `)

    counter = 1
    selectedTense = rl.questionInt("Type your answer: ")
    
    
    showPhrase()
}
function start() {
    console.clear()
    console.log(`
    You are Welcome to Error Detector!
    Let's go improve and test your English level!
    `)
    
    let continuar = rl.question("Press ENTER to continue...")

    selectTense()
}
start()