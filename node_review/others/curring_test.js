//예제1
function book(name) {
    return function(x) {
        return function(y) {
            return name(x, y);
        }
    }
}

function bookName(x, y) {
    return x + " : " + y;
}

let bookNameList = book(bookName);
console.log(bookNameList('초보자를 위한 ')('node.js'));

//예제2
function dairy(func) {
    return function dairyColor(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return dairyColor.apply(this, args.concat(args2));
            }
        }
    }
}

function diaryColorName(x, y, z) {
    return x + " , " + y + " , " + z;
}

let diaryColorList = dairy(diaryColorName);

console.log("다이어리 색깔 리스트 : " , diaryColorList('blue')('purple')('yellow'));