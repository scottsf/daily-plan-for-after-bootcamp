# JavaScript

* [Closure](#closure)
* [Lexical scope](#lexical-scope)
* [Curring](#curring)

## Closure 
  A *closure* is the combination of a function and the lexical environment within which that function was
  declared. 

  The combination of a function object and a scope (a set of variable bindings) in which the function's 
  variables are resolved is called a *closure*. 

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

More info: (MDN Closure)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
[[↑] Back to top](#JavaScript)

