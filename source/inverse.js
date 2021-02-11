'use strict';

const inverse = (numbers, n = 0) => {
    if (n === 0) {              // Если ноль, то просто разворачиваем
	    return numbers.reverse();
    }
    return (n > 0) ? numbers.slice(0,n).concat(numbers.slice(n).reverse()) :
        numbers.slice(0,numbers.length + n).reverse().concat(numbers.slice(n));
};
