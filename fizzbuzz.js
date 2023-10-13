// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
//-------------------------------------------


//starting at 0, less than or = to 100 to stop, i++ is number plus 1, plus 2 or 3 would be +2 + 3
for (let i= 0; i <= 100; i++){
    console.log(i)
    if (i % 5 === 0 && i % 3 === 0){
        console.log('Fizzbuzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log('Buzz')
    }else {
        console.log(i)
    }
}
//global scope is anything living outside any function. available to anything on that page, you can use inside of your functions. anything wrapped in curly braces has its own scope, local scope.