# JavaScript

* [Closure](#closure)
* [Lexical scope](#lexical-scope)
* [Curring](#curring)

## Lexical environment
  How a parser resolves variable names when functions are nested. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

  source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


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
  The normal, non-strict mode of JavaScript is sometimes referred to as sloppy mode. 
  It sloppy mode, assigning to an undeclared variable creates a global variable. 
  
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
  
  If you use strict mode in the above example undeclared will cause an error because pitfall is not declared.

## Hoisting 
  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Source: https://scotch.io/tutorials/understanding-hoisting-in-javascript

## Variable scope
  Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global:

  * Global variables are those declared outside of a block
  * Local variables are those declared inside of a block
    
  source: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript
  
## Difference Between *var*, *let*, and *const*
  The differences between the three are based on scope, hoisting, and reassignment.
  
  <img width="755" alt="screen shot 2019-01-08 at 1 46 44 pm" src="https://user-images.githubusercontent.com/43653189/50860883-ed867e00-134b-11e9-81fc-c519a9e92e03.png">

  source: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

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

