const sumAll = function(start, end) {
   let sum = 0;
   if ((start >= 0 && Number.isInteger(start)) && 
   (end >= 0 && Number.isInteger(end))){
        if (start > end){
            let revEnd = start;
            let revStart = end;

            for (let i = 0; i < revEnd +1; i++){
            sum += i;
            }
            return sum;
        }

        for (let i = 0; i < end +1; i++){
            sum += i;
        }
        return sum;
   }
   else {
    return "ERROR";
   }
};
    console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;
