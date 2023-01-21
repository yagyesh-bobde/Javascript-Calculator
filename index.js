function clearScreen() {
    document.getElementById('text_area').value="";
    document.getElementById('text_area').ariaPlaceholder = "0.0"
    document.getElementById('text_area').classList.remove('active')
}


function display(value) {
    document.getElementById('text_area').classList.remove('active')
    document.getElementById('text_area').value+= value;
}




function calculate() {
    let value = document.getElementById('text_area').value
    try {
        let answer = eval(value)
        document.getElementById('text_area').value = answer;
        document.getElementById('text_area').classList.add('active')
    } catch (error) {
        alert(error.message); 
        clearScreen()
    }
}

