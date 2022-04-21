// DOM Targeting
const readout = document.getElementById("calc__screen__readout");
const prevReadout = document.getElementById("calc__screen__prev");

const buttons = document.querySelectorAll(".calc__button");
const clearButton = document.getElementById("clear");

// Global Variables (so value is stored between button presses)
    const a = [];
    let mod = "";
    const b = [];
    const operation = [];

// Function called on each button press
const handleButtonPress = (e) => {
    e.preventDefault();

    // Store value of which button was pressed for ease of referral
    const userInput = e.currentTarget.id;
    // console.log(`Key Pressed: ${userInput}`);

    // Activate only when OPERATION is selected
    if (userInput === "+" ||
        userInput === "-" ||
        userInput === "/" ||
        userInput === "*") {
        mod = userInput;
        // console.log(`Mod: ${mod}`);
        // Update HTML with value of first number and the arithmatic operation
        readout.innerHTML = "";
        prevReadout.innerHTML = `${a.join("")} ${mod}`;
    }

    // Activate only PRIOR to OPERATION being selected // Continue to build array of first number of sum
    if (mod === "" &&
        userInput !== "+" &&
        userInput !== "-" &&
        userInput !== "/" &&
        userInput !== "*" &&
        userInput !== "=") {
        a.push(userInput);
        // console.log(`A:: ${a}`);
        readout.innerHTML = `${a.join("")}`;
    }

    // Activate only AFTER the OPERATION being selected // Continue to build array of second number of sum
    if (mod !== "" &&
        userInput !== "+" &&
        userInput !== "-" &&
        userInput !== "/" &&
        userInput !== "*" &&
        userInput !== "=") {
        b.push(userInput);
        // console.log(`B:: ${b}`);
        // Update HTML with value of first number and the arithmatic operation
        prevReadout.innerHTML = `${a.join("")} ${mod}`;
        // Update HTML with value of second number
        readout.innerHTML = `${b.join("")}`;
    }

    // Establish an output variable
    let output = 0;

    // Trigger switch block when "=" button pressed
    if (userInput === "=") {
        switch (true) {
            case mod === "+":
                // JOIN the array of values entered for each number
                // PARSEFLOAT to change the string from join to a decimal number 
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
        // Update HTML with equation
        prevReadout.innerHTML = `${a.join("")} ${mod} ${b.join("")} =`;
        // Update HTML with result of equation
        readout.innerHTML = `${output}`;
    }
}

// Function called on press of "clear" button to reset global variables and HTML
const handleClear = () => {
    a.length = 0;
    mod = "";
    b.length = 0;

    readout.innerHTML = "";
    prevReadout.innerHTML = "";
}

// Establish event listeners for all keys on the calculator
buttons.forEach( item => item.addEventListener('click', (e) => handleButtonPress(e) ) );
clearButton.addEventListener('click', handleClear );
