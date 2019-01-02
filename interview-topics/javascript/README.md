# JavaScript

* [Closure](#closure)
* [Lexical scope](#lexical-scope)
* [Curring](#curring)

## What is a Closure 
  A closure is a function plus the connection to the scope in which the function was created. The name stems from the fact that a closure "closes over" the free variables of a function. A variable is free if it is not declared within the function-that is, if it comes "from outside".

  If a function leaves the scope in which it was created, it stays connected to the variables of that scope (and of the surrounding scopes).
  ```
  function createInc(startValue) {
    return function (step) {
      startValue += step;
      return startValue;
    }
  }
  ```
[[↑] Back to top](#JavaScript)

