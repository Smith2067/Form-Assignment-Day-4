const addRange = document.getElementById('addRange');
const addInput = document.getElementById('addInput');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const outputSum = document.getElementById("outputSum");
const outputProduct = document.getElementById("outputProduct");

function addInputs(){
    var sum = Number(addRange.value) + Number(addInput.value);
    outputSum.innerText = sum;
}

addRange.addEventListener("input", addInputs);
addInput.addEventListener("input", addInputs);

function multiplyInputs(){
    var product = Number(firstInput.value) * Number(secondInput.value);
    outputProduct.innerText = product;
}

firstInput.addEventListener("input", multiplyInputs);
secondInput.addEventListener("input", multiplyInputs);
