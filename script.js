const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const output=document.getElementById("output");
function toRoman(num) {
            const romanNumerals = [
                { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
            ];
            
            let result = "";
            for (let i = 0; i < romanNumerals.length; i++) {
                while (num >= romanNumerals[i].value) {
                    result += romanNumerals[i].numeral;
                    num -= romanNumerals[i].value;
                }
            }
            return result;
        }
        function showMessage(message) { 
            console.log("showMessage called with:",message);
            output.textContent = message; 
            output.classList.remove("hidden");
            console.log("Output div classes:", output.classList);
        }
        // Add click event listener to the convert button
        convertBtn.addEventListener("click", () => {
            const number = parseInt(numberInput.value);

            if (isNaN(number)) {
                showMessage("Please enter a valid number");
                
            } else if (number < 1) {
                showMessage("Please enter a number greater than or equal to 1");
               
            } else if (number > 3999) {
                showMessage("Please enter a number less than or equal to 3999");
            
            } else {
                showMessage(toRoman(number));
                
        }});