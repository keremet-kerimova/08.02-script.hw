let inp2 = document.querySelector('#password');
let p = document.querySelector('.p');


inp2.addEventListener('input', function(even){
    if (inp2.value.length == 0){
        p.innerText = 'Enter password';
    }
    if (inp2.value.length  < 0) {
       p.innerText = 'Weakly';
    }
    if (inp2.value.length < 6){
        p.innerText = 'Good';
    }
    else if (inp2.value.length < 10){
        p.innerText = 'Very good';
    }
});



let input2 = document.querySelector('#number');
let button = document.querySelector('#number2');
let p2 = document.querySelector('#p2');


let dice = (Math.random () * 6) + 1;
button.addEventListener('click',function (event){
     if (input2 == dice){
         p2.innerText = 'You win ! Number is ' + dice;
     }
     else if (input2 !=dice){
         p2.innerText = 'You won ! Number is ' + dice;
     }
    
});







// fullName.addEventListener('change', function(event) { // при нажатии на клавищу
//     console.log('change');
//     //    if (event.code.match(/Key/) && !event.key.match(/[а-яА-Я]/)) {
//     //      event.preventDefault();
//     //  }
//      if (fullName.value.length > 5) {
//       console.log('Good')
//      }
//      else ('very good')
// });
// for (ix = 0; ix < 100; ix++){
//     ix2 = i + 1;
//     if (ix2 >= 100 - 1){
//         ix2 = 0;
//         ix2 = 0;
//     }
//     sum = ix + ix2 ;
//     printlinwe(sum)
// }