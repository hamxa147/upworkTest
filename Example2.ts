const data: string = 'bla bla  bla';

function validateString(data: string): boolean {
    const subString: string[] = data.split(' ');
    const isValidString: boolean = subString.includes("");
    return !isValidString;
}

function fixString(data: string): string {
    let fixString: string = "";
    let finalString: string = "";
    const hasSpacesStartEnd: string[] = data.split(' ');
    if (hasSpacesStartEnd[0] === "" || hasSpacesStartEnd[hasSpacesStartEnd.length - 1] === "") {
        hasSpacesStartEnd.map((item, index) => {
            if (index !== 0 || index !== hasSpacesStartEnd.length - 1) {
                fixString = fixString + item;
            }
        })
    }
    else {
        fixString = fixString + data;
    }
    console.log("fixString", fixString)
    const inBetween: string[] = fixString.split(" ");
    console.log('inBetween', inBetween)
    const isValidString: boolean = inBetween.includes("");
    console.log("isValidString", isValidString)
    if (isValidString) {
        inBetween.map((item) => {
            if (item !== "") {
                finalString = finalString + item + " ";
            }
        })
        return finalString.slice(0, -1);
    }
    else {
        return fixString;
    }
}
const isValid: boolean = validateString(data);
if (!isValid) {
    console.log("============", fixString(data))
}