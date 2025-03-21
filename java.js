//alert when page loads
alert('welcome to iky caculator');

function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function showText() {
    document.getElementById("text").style.display = "block";

}
function hideText() {
    document.getElementById("text").style.display = "none";
}

function greet() {
    alert('you can start your calculations now');
}

function calculateResult() {
    try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
} catch (error) {
    document.getElementById('display').value = "error"
}
}

function deleteLast() {
    let display = Document.getElementById("display");
    display.value = display.value.slice(0, -1); // remove the last character
}