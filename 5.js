function sumAll(...numbers){
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumAll(1,2))
console.log(sumAll(1, 2, 3, 4, 5))