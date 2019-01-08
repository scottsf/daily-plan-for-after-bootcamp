# JavaScript

* [Closure](#closure)
* [Lexical scope](#lexical-scope)
* [Curring](#curring)

## Strict mode
  Strict Mode is a feature that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
  
  * Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
  * Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
  * Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
  * It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
  * It disables features that are confusing or poorly thought out.
  * Strict mode makes it easier to write “secure” JavaScript.
      
  Strict mode can be used in two ways – used in global scope for the entire script and can be applied to individual functions. Strict mode doesn’t work with block statements enclosed in {} braces.
  
  source: https://www.geeksforgeeks.org/strict-mode-javascript/

## Sloppy mode
  It is a normal mode. In this mode, assigning to an undeclared variable creates a global variable. 
  
  ```javascript
  function check() {
    var declared = 'local variable';  
    undeclared = 'global variable';   // undeclared variable
    return `I'm a ${declared}, I'm a ${undeclared}.`;
  }

  console.log(check());

  console.log(undeclared); // return 'global variable'
  console.log(declared)    // return ReferenceError
  ```
  
  In strict mode
  If you use strict mode in the above example the pitfall variable will cause an error because pitfall is not declared.

## Hoisting 
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Source: https://scotch.io/tutorials/understanding-hoisting-in-javascript

## Variable scope
  A global variable has *global scope*. It is defined everywhere in your code. If a variable is declared in a function it becomes a local variable and it has *local scope*.   

## Lexical scope 

## Closure 
  A *closure* is the combination of a function and the lexical environment within which that function was
  declared. 

  ```javascript
  let scope = "global scope";         // A global variable
  function findNemo(name) {
    let scope = "local scope";        // A local variable
    return function f() { 
      return `${name} in ${scope}`;   // Return the value in scope 
    }   
  } 
  
  findNemo('Nemo')();                 // => "local scope"
  ```
  
  Closures capture the local variables and can use them as private state. 
  ```javascript
  let  inc = (function () {
    let number = 0;
    return function () { 
        return number += 1;
    }
  }());
  inc();       // Return 1
  inc();       // Return 2
  ```
  ##### More info: [MDN Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
  ##### Helpful article: [Medium](https://medium.com/koderlabs/javascript-scope-chain-and-execution-context-simplified-ffb54fc6ad02)
  [[↑] Back to top](#JavaScript)

