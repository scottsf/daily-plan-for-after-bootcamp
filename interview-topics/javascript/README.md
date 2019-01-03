# JavaScript

* [Closure](#closure)
* [Lexical scope](#lexical-scope)
* [Curring](#curring)

## Closure 
  A *closure* is the combination of a function and the lexical environment within which that function was
  declared. 

  ```
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
  ```
  let  inc = (function () {
    let number = 0;
      return function () { 
          return number += 1
            }

  }())

  inc();      // Return 1
  inc()       // Return 2
  ```
More info: (MDN Closure)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
Helpful article: (Medium)(https://medium.com/koderlabs/javascript-scope-chain-and-execution-context-simplified-ffb54fc6ad02)
[[↑] Back to top](#JavaScript)

