// Takes a number  as input outputs true if the number is a perfect square
//  false  if it is not

var isSquare = function(n) {
    if (n  === 0 || n === 1) {
        return true;
    } else {
        for (i=0;i<=n/2;i++) {
            let squared = i*i;
            if(squared === n) {
                return true;
            } else if (n < squared) {
                return false;
            }    
        }
        return false;
    }     
}