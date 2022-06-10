let catBtn = document.getElementById("getcat");
let dogBtn = document.getElementById("getdog");
let animalBtn = document.getElementById("getanimal");
let dogHolder = document.getElementById("dogholder");
let catHolder = document.getElementById("catholder");
let animalHolder = document.getElementById("animalholder");
let animalName = document.getElementById("animalname");
let animalType = document.getElementById("animaltype");
let animalSpan = document.getElementById("animalspan");
let animalHabitat = document.getElementById("animalhabitat");
let animalLocation = document.getElementById("animallocation");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let quote = document.getElementById("quote");
let joke = document.getElementById("joke");
let quoteAuthor = document.getElementById("quoteauthor");
let jokeAuthor = document.getElementById("jokeauthor");
let quoteBtn = document.getElementById("quotebtn");
let jokeBtn = document.getElementById("jokebtn");
let cardBtns = document.querySelectorAll(".cardbtn")
// let downloadLink = document.getElementById("link");

dogBtn.addEventListener("click", getDog)
catBtn.addEventListener("click", getCat)
animalBtn.addEventListener("click", getAnimal)
quoteBtn.addEventListener("click", getQuote)
jokeBtn.addEventListener("click", getJoke)


function getDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
        dogHolder.src = data.message
    })
}

function getCat(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => {
        catHolder.src = data[0].url

    })
}
function getAnimal(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then((res) => res.json())
    .then((data) => {
        animalHolder.src = data.image_link
        animalName.innerHTML = data.name
        animalType.innerHTML = data.animal_type
        animalSpan.innerHTML = data.lifespan
        animalHabitat.innerHTML = data.habitat
        animalLocation.innerHTML = data.geo_range
    })
    .catch((err) => console.log(err))
}
function getQuote(){
    fetch('http://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = data.content
        quoteAuthor.innerHTML = data.author
    })
    .catch((err) => console.log(err))
}
function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then((res) => res.json())
    .then((data) => {
        joke.innerHTML = data.setup
        jokeAuthor.innerHTML = data.delivery
    })
    .catch((err) => console.log(err))
}



getCat();
getDog();
getAnimal();
getQuote();
getJoke();


for(let i=0; i < cardBtns.length; i++ ){
    cardBtns[0].addEventListener("click", () => {
        cardBtns[0].classList.add("active")
        cardBtns[1].classList.remove("active")
        cardBtns[2].classList.remove("active")
        card2.classList.remove("active")
        card3.classList.remove("active")
        card1.classList.add("active")
    })
    cardBtns[1].addEventListener("click", () => {
        cardBtns[1].classList.add("active")
        cardBtns[0].classList.remove("active")
        cardBtns[2].classList.remove("active")
        card1.classList.remove("active")
        card3.classList.remove("active")
        card2.classList.add("active")
    })
    cardBtns[2].addEventListener("click", () => {
        cardBtns[2].classList.add("active")
        cardBtns[1].classList.remove("active")
        cardBtns[0].classList.remove("active")
        card1.classList.remove("active")
        card2.classList.remove("active")
        card3.classList.add("active")
    })
}

