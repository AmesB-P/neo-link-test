/**
 * Converts a Roman numeral represented as a string to its numeric value.
 *
 * @param {string} val - The Roman numeral string to be converted.
 * @returns {number|null} - The numeric value of the Roman numeral, or null if the input is invalid.
 */
const solution = (val) => {
    try {
        // Convert the input string to uppercase and split it into an array of characters
        const splitValue = val.toUpperCase().split("")

        // Define an object with Roman numeral symbols and their corresponding values
        const objSymbol = {
            A : 1,
            B : 5,
            Z : 10,
            L : 50,
            C : 100,
            D : 500,
            R : 1000,
        }


        // Check if each character in the input is a valid Roman numeral symbol
        const checkValidVal = splitValue.map(e => Object.keys(objSymbol).includes(e)).every((validValue) => validValue === true)
        if (!checkValidVal) {
            return null;
        }


        let result = 0
        let newArr = [] // Array to store mapped values

        // Map each input character to its corresponding symbol and value
        splitValue.map((e, _idx) => {
            Object.entries(objSymbol).map(([key ,value]) => {
                if (key === e) {
                    newArr.push({key , value})
                }
            })
        })

        // Reverse the array for easier processing in the logic
        const reverseArr = newArr.reverse().map(e => e)

        // Loop through the reversed array to calculate the numeric value
        for (let i = 0; i < newArr.length; i++) {

            if (reverseArr[i + 1]?.value < reverseArr[i].value) {
                // If the next value is less than the current value, subtract it
                result += (reverseArr[i].value - reverseArr[i + 1].value) - reverseArr[i].value
            } else if (reverseArr[i + 1]?.value >= reverseArr[i].value) {
                // If the next value is greater or equal, add it to the result
                result += (reverseArr[i + 1].value + reverseArr[i].value) - reverseArr[i].value
            } else {
                // This case is reached when processing the last element
                result += reverseArr[0].value
            }
        }

        return result

    } catch (err) {
        console.error(err)
    }

}



console.log(solution("rcrzcab"))
