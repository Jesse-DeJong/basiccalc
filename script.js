// DOM Targeting
// const equals = document.getElementById("=");
// const plus = document.getElementById("+");
// const minus = document.getElementById("-");
// const divide = document.getElementById("/");
// const multiply = document.getElementById("*");
// const period = document.getElementById(".");

// const zero = document.getElementById("0");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");

const buttons = document.querySelectorAll(".calc__button");

    const a = [];
    let mod = "";
    const b = [];

const handleButtonPress = (e) => {
    e.preventDefault();

    const userInput = e.currentTarget.id;
    console.log(`Key Pressed: ${userInput}`);

    const operation = []; 
    let output = 0;

    if (userInput === "+" ||
        userInput === "-" ||
        userInput === "/" ||
        userInput === "*") {
        // console.log(`Mod: ${mod}`);
        mod = userInput;
        console.log(`Mod: ${mod}`);
    }

    if (mod === "" &&
        userInput !== "+" &&
        userInput !== "-" &&
        userInput !== "/" &&
        userInput !== "*" &&
        userInput !== "=") {
        // console.log(`::A ${a}`);
        a.push(userInput);
        console.log(`A:: ${a}`);
    }

    if (mod !== "" &&
        userInput !== "+" &&
        userInput !== "-" &&
        userInput !== "/" &&
        userInput !== "*" &&
        userInput !== "=") {
        // console.log(`::B ${b}`);
        b.push(userInput);
        console.log(`B:: ${b}`);
    }

    if (userInput === "=") {
        switch (true) {
            case mod === "+":
                output = parseFloat(a.join("")) + parseFloat(b.join(""));
                break;
            case mod === "-":
                output = parseFloat(a.join("")) - parseFloat(b.join(""));
                break;
            case mod === "/":
                output = parseFloat(a.join("")) / parseFloat(b.join(""));
                break;
            case mod === "*":
                output = parseFloat(a.join("")) * parseFloat(b.join(""));
                break;
        }
        console.log(`Answer: ${a} ${mod} ${b} = ${output}`);
        console.log(`${output}`);
    }

    operation.push(userInput);

    
}

buttons.forEach( item => item.addEventListener('click', (e) => handleButtonPress(e) ) );