let in2 = document.querySelector('#password');
let p = document.querySelector('p');


in2.addEventListener('input', function(even){
    if (in2.nodeValue.length == 0){
        p.innerText = ' Ввыведите пароль';
    }
    else if (in2.value.length  > 0) {
       p.innerText = 'weakly';
    }
    if (in2.value.length >= 6){
        p.innerText = 'Good';
    }
    if (in2.value.length >= 10){
        p.innerText = ' Very good';
    }
})



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