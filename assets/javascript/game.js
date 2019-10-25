var score = 0;
var bossNumber = 0;
var wins = 0
var loses = 0

// pokeball properties 
var pokeballs = {

    poke: {
        name: "Pokeball ",
        value: 0
    },
    great: {
        name: "Greatball ",
        value: 0
    },
    ultra: {
        name: "Ultra ",
        value: 0
    },

    master: {
        name: "Masterball ",
        value: 0
    },
}


// generate two random numbers with arguements *found on stackoverflow https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// ready game 
gameStart = () => {
    score = 0;

    bossNumber = randomIntFromInterval(75, 120);

    console.log(bossNumber)
    // the stronger the pokeball the greater chance of a higher number 
    pokeballs.poke.value = randomIntFromInterval(1, 5);
    console.log('pokeball value:' + pokeballs.poke.value)
    pokeballs.great.value = randomIntFromInterval(1, 10);
    console.log('greatball value:' + pokeballs.great.value)
    pokeballs.ultra.value = randomIntFromInterval(1, 15);
    console.log('ultraball value:' + pokeballs.ultra.value)
    pokeballs.master.value = randomIntFromInterval(1, 30);
    console.log('masterball value:' + pokeballs.master.value)


    $("#score").text(score);
    $("#boss-number").text("Previous number:" + bossNumber);

}


// checks for win/lose conditions , had to check for loses first because it would assume id win if i check for wins first 
checkWin = () => {
    if (score > bossNumber) {
        // alert("Sorry. You lost!");
        $("#message").text("YOU lose you suck!");
        console.log("You Lost");


        loses++;
        console.log(loses + "loses")
        $("#losses").text("LOSSES: " + loses);

        gameStart();
    }

    else if (score === bossNumber) {
        // alert("Congratulations! You Won!");
        $("#message").text("YOU WIN!");
        console.log("You Won!");

        wins++;
        console.log(wins + "wins")
        $("#wins").text("WINS: " + wins);

        gameStart();
    }

};
console.log(wins + "wins");
console.log(loses + "losses");

// adds value to score from pokeballs 
addPoke = (pokeballClick) => {
    score += pokeballClick.value;
    $("#score").text("Your Score:" + score);
    checkWin();


    console.log("Your Score: " + score);
};

// initialize game 
gameStart();

$("#poke").click(function () {
    console.log('clicked me')
    addPoke(pokeballs.poke);
});

$("#great").click(function () {
    addPoke(pokeballs.great);
});

$("#ultra").click(function () {
    addPoke(pokeballs.ultra);
});

$("#master").click(function () {
    addPoke(pokeballs.master);
});

