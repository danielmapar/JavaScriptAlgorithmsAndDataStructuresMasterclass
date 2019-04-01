function sameFrequency(numberOne, numberTwo){

    while(true) {
        numberOne = numberOne / 10;
        numberTwo = numberTwo / 10;
        if (numberOne >= 1 && numberTwo >= 1) continue;
        if (numberOne < 1 && numberTwo < 1) return true;
        return false;
    }
}

function sameFrequency2(numberOne, numberTwo){

    let lookup = {}

    let numberOneStr = String(numberOne)
    let numberTwoStr = String(numberTwo)

    for (let i = 0; i < numberOneStr.length; i++) {
        if(lookup[numberOneStr.charAt(i)] === undefined) lookup[numberOneStr.charAt(i)] = 0;
        lookup[numberOneStr.charAt(i)]++;
    }

    for (let i = 0; i < numberTwoStr.length; i++) {
        if (lookup[numberTwoStr.charAt(i)] > 0) {
            lookup[numberTwoStr.charAt(i)]--;
            continue;
        }
        return false;
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(182322, 281232));
console.log(sameFrequency(22, 222));
console.log("-----------")
console.log(sameFrequency2(182, 281));
console.log(sameFrequency2(34, 14));
console.log(sameFrequency2(182322, 281232));
console.log(sameFrequency2(22, 222));