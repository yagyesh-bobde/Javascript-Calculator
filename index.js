function display(value) {
    let displayText= document.getElementById('text_area').value
    document.getElementById('text_area').classList.remove('active')
    displayText = displayText + value;
    document.getElementById('text_area').value = displayText;
}




function calculate() {
    let value = document.getElementById('text_area').value
    let answer = eval(value)
    document.getElementById('text_area').value = answer;
    document.getElementById('text_area').classList.add('active')
}

function clear() {
    console.log(1)
    
}