/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

 let resetButton = document.querySelector('#reset-button');


let imageD6 = document.querySelector('#d6-roll');


let oneDoubleD6 = document.querySelector('#double-d6-roll-1');

let twoDoubleD6 = document.querySelector('#double-d6-roll-2');


let imageD12 = document.querySelector('#d12-roll');


let imageD20 = document.querySelector('#d20-roll');

let meanD6 = document.querySelector('#d6-rolls-mean');

let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');

let D12Mean = document.querySelector('#d12-rolls-mean');

let D20Mean = document.querySelector('#d20-rolls-mean');



/*******************
 * EVENT LISTENERS *
 *******************/

imageD6.addEventListener('click', function(){
    console.log('D6 clicked and works!');
    d6Roll();
})

resetButton.addEventListener('click', function(){
    console.log('resetbutton clicked and works!');
    reset();
})


oneDoubleD6.addEventListener('click', function(){
    console.log('oneDoubleD6 clicked and works!');
    doubleD6Roll();
})

twoDoubleD6.addEventListener('click', function(){
    console.log('two DoubleD6 clicked and works!');
    doubleD6Roll();
})

imageD12.addEventListener('click', function(){
    console.log('D12 clicked and works!');
    d12Roll();
})

imageD20.addEventListener('click', function(){
    console.log('D20 clicked and works!');
    d20Roll();
})



/******************
 * RESET FUNCTION *
 ******************/

function reset(){

    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    imageD6.src = "./images/start/d6.png";
    meanD6.innerText = "N/A";

    oneDoubleD6.src = "./images/start/d6.png";
    doubleD6Mean.innerText = "N/A";

    twoDoubleD6.src = "./images/start/d6.png";
    doubleD6Mean.innerText = "N/A";

    imageD12.src = "./images/start/d12.jpeg";
    doubleD6Mean.innerText = "N/A";

    imageD20.src = "./images/start/d20.jpg";
    doubleD6Mean.innerText = "N/A";
}
reset();


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6Roll(){
    let result = getRandomNumber(6);
    console.log(result);

    imageD6.src = "./images/start/d6.png";

    sixes.push(result);

    console.log(sixes);

    meanD6.innerText = getMean(sixes);
}


function doubleD6Roll(){
    let result1 = getRandomNumber(6);
    console.log(result1);
    oneDoubleD6.src = "./images/start/d6.png";

    let result2 = getRandomNumber(6);
    console.log(result2);
    twoDoubleD6.src = "./images/start/d6.png";

    doubleSixes.push(result1, result2);

    console.log(doubleSixes);

    doubleD6Mean.innerText = getMean(doubleSixes);
}


function d12Roll(){
    let result3 = getRandomNumber(12);
    console.log(result3);

    imageD12.src = "./images/start/d12.jpeg";

    twelves.push(result3);

    console.log(twelves);

    D12Mean.innerText = getMean(twelves);
}


function d20Roll(){
    let result4 = getRandomNumber(20);
    console.log(result4);

    imageD20.src = "./images/start/d20.jpg";

    twenties.push(result4);

    console.log(twenties);

    D20Mean.innerText = getMean(twenties);
}







/****************
 * MATH SECTION *
 ****************/

function getMean(array){

    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum/array.length;
}