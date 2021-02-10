fullName.addEventListener('change', function(event) { // при нажатии на клавищу
    console.log('change');
    //    if (event.code.match(/Key/) && !event.key.match(/[а-яА-Я]/)) {
    //      event.preventDefault();
    //  }
     if (fullName.value.length > 5) {
      console.log('Good')
     }
     else ('very good')
});
for (ix = 0; ix < 100; ix++){
    ix2 = i + 1;
    if (ix2 >= 100 - 1){
        ix2 = 0;
        ix2 = 0;
    }
    sum = ix + ix2 ;
    printlinwe(sum)
}