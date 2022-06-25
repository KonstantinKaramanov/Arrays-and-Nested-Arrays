function largest(a, b, c) {
    let result;

    if (a >= b && a >= c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else {
        result = c;
    }
    console.log(`The largest number is ${result}.`);
}

largest(1, 2, 3);
largest(1, 3, 2);
largest(3, 2, 1);

// alternative
//function largest(a, b, c) {
   // let result = Math.max(a, b, c);

   // console.log(`The largest number is ${result}.`);
//}