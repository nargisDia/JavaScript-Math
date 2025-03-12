// JavaScript Math

// let num = 30.900000001;
// let num2 = 2;
// if need Round number
// console.log(Math.round(num));

// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// Squre Value

//console.log(Math.pow(3,3));

// Root Value
// console.log(Math.sqrt(74));
// console.log(Math.abs(-74));

// Min or Max num
// console.log(Math.min(1, 2, 5, 0 ,4, 6));
// console.log(Math.max(6, 9, 0, 3, 5, 10));

// PI value
// console.log(Math.PI);

// sin cos er rule
// console.log(Math.sin((90 *Math.PI)/180));
//console.log(Math.sin((90*Math.PI)/180));
// console.log(Math.sin((90*Math.PI)/180));


// Random Value 
// console.log(Math.random());
// console.log(Math.random().toFixed(3));
// console.log(Math.random().toFixed(2) * 10);
//console.log(Math.random().toFixed(2) * 10 + 1);
//console.log(Math.floor(Math.random().toFixed(2) * 10 + 1));


//ludo
// let upperValue = 6;
// let lowerValue = 1;
//let resultValue = Math.random() * upperValue;
// let resultValue = Math.ceil(Math.random() * upperValue);
// console.log(resultValue);

function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('ludo').src = imageSource;
}