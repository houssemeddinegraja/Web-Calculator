const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const result = document.getElementById("result");

console.log("wiiw")

const add = () => { 
    let val1 = parseFloat(x1.value);
    let val2 = parseFloat(x2.value);

    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else {
        result.textContent = "";
        let res = val1 + val2;
        result.textContent = res;
        console.log(res);
    }
}

const subtract = () => {
    let val1 = parseFloat(x1.value);
    let val2 = parseFloat(x2.value);
    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else {
        result.textContent = "";
        let res = val1 - val2;
        result.textContent = res;
        console.log(res);
    }
}

const multiply = () => {
    let val1 = parseFloat(x1.value);
    let val2 = parseFloat(x2.value);
    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else {
        result.textContent = "";
        let res = val1 * val2;
        result.textContent = res;
        console.log(res);
    }
}

const divide = () => { 
    let val1 = parseFloat(x1.value);
    let val2 = parseFloat(x2.value);
    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else if (val2 === 0) {
        result.textContent = "Cannot divide by zero!";
        return;
    }
    else {
        result.textContent = "";
        let res = val1 / val2;
        result.textContent = res;
        console.log(res);
    }
}

const gcd = (x, y) => {
    if (y === 0) {
        return x;
    }
    return gcd(y, x % y);
}

const lcm = (x,y) => {
    return (x * y) / gcd(x, y);
}

const findGCD = () => {
    let val1 = parseInt(x1.value);
    let val2 = parseInt(x2.value);
    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else {
        result.textContent = "";
        let res = gcd(val1, val2);
        result.textContent = res;
    }
}

const findLCM = () => {
    let val1 = parseInt(x1.value);
    let val2 = parseInt(x2.value);
    if (isNaN(val1) || isNaN(val2)) {
        result.textContent = "Please enter two numbers!";
        return;
    }
    else {
        result.textContent = "";
        let res = lcm(val1, val2);
        result.textContent = res;
    }
}


const reset = () => {
    x1.value = "";
    x2.value = "";
    result.textContent = "Your result here";
}


