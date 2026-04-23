const rl = require('readline-sync')

const levels = {
    1: {
        name: 'Easy',
        attempts: 8,
        words: [
            "cat","dog","sun","moon","star","book","tree","car","fish","bird","milk","bread","apple","chair","table","house","water","phone","plant","light","pen","cup","hat","bed","box","key","map","toy","bag","egg","ice","jam","leaf","road","ship","ring","snow","wind","fire","rock"
        ]
    },
    2: {
        name: 'Medium',
        attempts: 6,
        words: [
            "garden","window","bottle","pencil","orange","banana","school","teacher","student","library","kitchen","picture","country","city","animal","flower","bridge","river","market","travel","airport","station","holiday","weather","message","program","language","internet","history","science"
        ]
    },
    3: {
        name:'Hard',
        attempts: 5,
        words: [
            "algorithm","encryption","firewall","database","framework","javascript","typescript","interface","repository","deployment","container","virtualization","microservice","architecture","authentication","authorization","scalability","optimization","compilation","debugging","iteration","recursion","multithreading","asynchronous","synchronization","dependency","integration","automation","infrastructure","cybersecurity"
        ]
    }
}

const hangmanStages = [
    `
      +---+
      |   |
          |
          |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
          |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
     /    |
          |
    =========
    `,
    `
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========
    `
    ];

//Mostra menu
console.log('=== HANGMAN GAME ===')
console.log('Choose difficulty:')
console.log('1 - Easy')
console.log('2 - Medium')
console.log('3 - Hard')

//Lê o que o usuário digitou
let levelChoice = rl.question('Enter (1/2/3): ')
// tenta pegar o nível escolhido
// se o usuário digitar algo inválido (ex: 9, abc) usa o nível 1 como padrão
let level = levels[levelChoice] || levels[1]

//escolhe uma palavra aleatória
// Math.random() gera número entre 0 e 1
// multiplicamos pelo tamanho do array
// Math.floor() arredonda pra baixo
const chosenWord = level.words[Math.floor(Math.random() * level.words.length)]

//array vazio -> Vai guardar as letras que o jogador já tentou
let guessedLetters = []

//número de tentativas começa baseado no nível
let attempts = level.attempts

//======================
//FUNÇÃO: displayWord
//======================

//essa função monta a palavra na tela (com _ nas letras escondidas)
function displayWord() {
        //split transforma a string em array
        // 'cat' -> ['c','a','t']

        //map percorre cada letra e retorna um novo array
        //se a letra já foi descoberta -> mostra ela
        //se não -> mostra '_'

        //operador ternário é quase um if else simples
        //condição ? valorTrue : valorFalse

        //join junta tudo em string novamente com espaço
        //['c','_','t'] -> 'c _ t

    return chosenWord.split('').map((letter) => {
        return guessedLetters.includes(letter) ? letter : '_'
    }).join(' ')
}

//=======================
//FUNÇÃO: isWordComplete
//=======================

//verifica se o jogador já descobriu TODAS as letras
function isWordComplete() {
    return chosenWord.split('').every((letter) => guessedLetters.includes(letter))

    //.every = verifica se TODOS os itens passam na condição
    //retorna true ou false
}

//======================
//FUNÇÃO: drawHangman
//======================

//decide qual desenho mostrar baseado nos erros
function drawHangman() {
    const stageIndex = hangmanStages.length - 1 - attempts

    //Lógica:
    //quanto MENOS tentantivas -> mais avançado o desenho

    return hangmanStages[Math.max(0, stageIndex)]

    //Math.max evita índice negtivo
}

//===============
//LOOP PRINCIPAL
//===============

//enquanto ainda tiver tentativas = jogo continua
while(attempts > 0) {
    console.clear() //limpa a tela (para aparecer o jogo)

    console.log(`=== ${level.name.toUpperCase()} MODE ===`)
    console.log(drawHangman())
    console.log('\nWord:', displayWord())
    console.log('Attempts left:', attempts)
    console.log('Guessed:', guessedLetters.join(', ') || 'none')

    //pega input do jogador
    let guess = rl.question('\nGuess a letter or the full word: ').toLowerCase()

    //toLowerCase -> transforma tudo em minúsculo
    //evita problema tipo "A" != "a"

//=========================
//CHUTE DE PALAVRA INTEIRA
//=========================
if (guess.length > 1) {
    //se digitou mais de 1 caractere -> assumimos que é palavra

    if (guess === chosenWord) {
        console.log('\nYou guessed the word!')
        break //Sai do loop -> venceu
    } else {
        console.log('Wrong word!')
        attempts-- //perde tentativa
        rl.question('Press ENTER...')
        continue //volta pro início do loop
    }
}

//====================
//VALIDAÇÃO COM REGEX
//====================
if (!guess.match(/^[a-z]$/)) {
    console.log('Type only ONE letter (a-z).')
    rl.question('Press ENTER...')
    continue
    
    //REGEX explicado:
    // ^ -> começo da string
    // [a-z] -> qualquer letra de a até z
    // $ -> fim da string

    // ou seja:
    // só aceita EXATAMENTE 1 letra

    // exemplos válidos:
    // "a", "b", "z"

    //inválidos:
    // "ab", "1", "@", ""
}

//======================
// EVITAR LETRA REPETIDA
//======================
if (guessedLetters.includes(guess)) {
    console.log('You already tried that letter.')
    rl.question('Press ENTER...')
    continue
}

//adicione letra no array
guessedLetters.push(guess)

//====================
// VERIFICA SE ACERTOU
//====================
if (chosenWord.includes(guess)) {
    console.log('Correct!')
} else {
    console.log('Wrong!')
    attempts--
}

//=================
// VERIFICA VITÓRIA
//=================

if (isWordComplete()) {
    console.clear()
    console.log(displayWord())
    console.log('\nYou Won!')
    break
}

 rl.question('Press ENTER...')   
}
//=============
// FIM DO JOGO
//=============
if (attempts === 0) {
    console.clear()
    console.log(drawHangman())
    console.log('\nGame Over!')
    console.log('The Word was:', chosenWord)
}


