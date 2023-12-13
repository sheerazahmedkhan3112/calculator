//____________________Calculator____________________
let input =  document.querySelector("input")
function getValue(e){
    input.value += e.target.innerText
}

function calci(){
    input.value = eval(input.value)
}

function emptyField(){
    input.value = ""
}