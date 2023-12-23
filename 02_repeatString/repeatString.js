const repeatString = function(str, num) {
    let newWord = "";
    if (num > 0){
        for (let i = 0; i < num; i++){
            newWord += str;
        }
        return newWord;
    }
    else if (num < 0){
        return "ERROR";
    }
    else{
        return "";
    }
};
// Do not edit below this line
module.exports = repeatString;
``