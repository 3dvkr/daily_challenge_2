let numberWord = (number, word) => {
    (word.length * number > 100) ? console.log('WINNER!') : null;
}

numberWord(+prompt('Enter a number: '), prompt('Enter a string: '));
