function tri(numbers, order) {
    return sort(numbers, order);
}

function sort(numbers, order) {
    var j = 0;
    while(j < numbers.length) {
        for(let i = 0; i < numbers.length; i++) {
            var first = numbers[i];
            var last = numbers[i+1];
            if(order == "asc")  {
                if(first < last) {
                    numbers[i] = last;
                    numbers[i+1] = first;
                }
            } else if(order == "desc") {
                if(first > last) {
                    numbers[i] = last;
                    numbers[i+1] = first;
                }
            }
        }
        j++;
    }
    return numbers;
}

