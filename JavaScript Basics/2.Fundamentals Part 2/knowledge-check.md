# Fundamentals Part 2 

## What are the eight data types in JavaScript?
    string,
    number,
    boolean, 
    null,
    undefined,
    bigint,
    symbol,
    object
## Which data type is NOT primitive?
    the *object* datatype cause it is not define by JS itself, whereas by the dev. 
## What is the relationship between null and undefined?
    They booth return false as a boolean check which means they value is not assigned.
## What is the difference between single, double, and backtick quotes for strings?
    Single and Double work as the same. Although a single quotation ' ' can be misinterpreted since there are a few words that uses it in English, such as *I'll*. Backtick has the same purpose, but it can assign variables value within it using ${variable}.
## What is the term for embedding variables/expressions in a string?
    Concatenate strings.
## Which type of quote lets you embed variables/expressions in a string?
    the literal template using backticks ` `
## How do you embed variables/expressions in a string?
    ${variable}
## How do you escape characters in a string?
    using \ after the word or letter you wanna to scape, such as 'I\'ve got a bug to debug'
## What is the difference between the slice/substring/substr string methods?
    The slice(star, end) and substring(start, end) work as the same, although substring will start at the end of the string if its value is negative substring(-6). The substr will use the length as the second parameter substr(start, length)
## What are the three logical operators and what do they stand for?
    = checks if the values are equals to each other
    > checks if the value at the right is greater than the value at the left
    < checks if the value at right is less than the value at the left
## What are the comparison operators?
    == and ===
## What are truthy and falsy values?
    false = 0
    true = 1
## What are the falsy values in JavaScript?
    0
    " "
    null 
    undefined 
    NaN
## What are conditionals?
    Are blocks of code that checks if something is true or not
## What is the syntax for an if/else conditional?
    if (expression) {
        block code
    }else {
        block code if the expression is falsy
    }
## What is the syntax for a switch statement?
    switch(value) {
        case choice1:
            run a code
            break;
        case choice2: 
            run a code
            break;
        default: 
        if none of the cases were used run this code
    }
## What is the syntax for a ternary operator?
    variable = (expression) ? doIt : ifNot
## What is nesting?
    It is nesting code that has a descendent behavior, like parents and children