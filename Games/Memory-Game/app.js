const cardArray = [
    {
        name: 'charmander',
        img: 'images/charmander.png'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },

    {
        name: 'squirtle',
        img: 'images/squirtle.png'
    },

    {
        name: 'eevee',
        img: 'images/eevee.png'
    },

    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },

    {
        name: 'psyduck',
        img: 'images/psyduck.png'
    },

    {
        name: 'charmander',
        img: 'images/charmander.png'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },

    {
        name: 'squirtle',
        img: 'images/squirtle.png'
    },

    {
        name: 'eevee',
        img: 'images/eevee.png'
    },

    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },

    {
        name: 'psyduck',
        img: 'images/psyduck.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/pokeball.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionOneId==optionTwoId) {
    alert('You have clicked the same image!')
    }



    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
resultDisplay.textContent = 'Congratulations! You found them all!'
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}