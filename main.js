// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

document.querySelector('h2').addEventListener('click', fizzbuzz)

function fizzbuzz(){
    const number = document.querySelector('input').value
    const result = document.getElementById('outcome')
    console.log(result)

    if (number % 5 === 0 && number % 3 === 0){
        result.innerText = 'FizzBuzz'
        console.log('Fizzbuzz')
    }else if(number % 3 === 0){
        result.innerText = 'Fizz'
        console.log('Fizz')
    }else if(number % 5 === 0){
        result.innerText = 'Buzz'
        console.log('Buzz')
    }else {
        result.innerText = number
        console.log(number)
    }
}