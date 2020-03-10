const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let str;
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    for (let i = 0; i < arr.length; i++) {
        str = "";
        if (arr[i].substr(0, 2) == "**") {
            arr1.push(" ");
            continue;
        }
        for (let j = 0; j < arr[i].length; j += 2) {
            if (arr[i].substr(j, 2) == "10") {
                str = str + ".";
                continue;
            } else if (arr[i].substr(j, 2) == "11") {
                str = str + "-";
                continue;
            } else if (arr[i].substr(j, 2) == "00") {
                continue;
            }
        }
        arr1.push(str);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in MORSE_TABLE) {
            arr2.push(MORSE_TABLE[arr1[i]]);
        } else if(arr1[i] == " ") {
            arr2.push(" ");
        }
        
    }
    return arr2.join("");
}

module.exports = {
    decode
}