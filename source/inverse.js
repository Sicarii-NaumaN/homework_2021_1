'use strict';

/**
 * Возвращает развернутый массив. Если в функцию передать необязательный 
 * параметр n, отличный от нуля, то изменится лишь определенная часть множества.
 * В случае отрицательных значений неизменным останутся элементы с конца массива до 
 * numbers.length + n, иначе - с начала до numbers.length - n.   
 * 
 * @param {numbers} numbers - входной массив 
 * @param {digit} n - опциональный параметр, разделитель областей для разворачивания
 * 
 * @throws {TypeError} - выдает ошибку при некоректных данных
 * 
 * @returns {numbers} - возвращается развернутый/частично развернутый массив
 */
const inverse = (numbers, n = 0) => {
    if (!Number.isInteger(n))  {throw new TypeError('Ошибка входных данных');}
    return (n >= 0) ? numbers.slice(0,n).concat(numbers.slice(n).reverse()) :
        numbers.slice(0,numbers.length + n).reverse().concat(numbers.slice(n));
};
