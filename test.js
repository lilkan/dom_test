var numberInput = document.getElementById('number-input');
var colorInput = document.getElementById('color-input');
var container = document.getElementById('container');

numberInput.addEventListener('input', function(e) {
    var value = e.target.value

    var blocksHtml = ''

    for (var i=0; i<value; i++) {
        var block = document.createElement('div')
        
        block.className = 'blocks__item'
        block.innerText = i+1

        blocksHtml += block.outerHTML
    }
    container.innerHTML=blocksHtml
})

var isOdd = true;

colorInput.addEventListener('change', function(e) {
    var color = e.target.value
    var elems = container.children
    
    isOdd = isOdd 
    ? false
    : true

    // isOdd = !isOdd
    // Тоже самое
    // if (isOdd === true) {
    //     isOdd = false
    // } else {
    //     isOdd = true
    // }

    console.log(isOdd);

    for (var i=0; i<elems.length; i++){

        if (isOdd && i % 2 === 0) {
            elems[i].style.background = color
        }
    
        if (!isOdd && i % 2 !== 0) {
            elems[i].style.background = color
        }
    } 
    
    })