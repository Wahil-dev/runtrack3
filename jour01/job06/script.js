function fizzbuzz() {
    for(i = 1; i <= 151; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} si un nombre : FizzBuzz`);
        } 
        else if(i % 3 == 0) {
            console.log(`${i} si un nombre : Fizz`);
        } 
        else if(i % 5 == 0) {
            console.log(`${i} si un nombre : Buzz`);
        }
    }
}
fizzbuzz()