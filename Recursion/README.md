# Recursion

* A **process** (a function in our case) that **calls itself**

* Examples:
    * `JSON.parse`, `JSON.stringify`
    *  DOM traversal
        * `document.getElementById`
    * Object traversal 

* Iteratively vs Recursive 

* Call stack
    * It's a **stack** data structure - we will talk about that later!
    * Any time a function is invoked it is placed (**pushed**) on the top of the call stack
    * When a JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)
    * Last in First out

* Two essential parts of a recursive function
    * Base Case
    * Different Input

* Where things go wrong
    * No base case
    * Forgetting to return or returning the wrong thing
    * Stack overflow!

* Pure Recursion Tips
    * For arrays, use methods like **slice**, the **spread** operator, and **concat** that **make copies of arrays** so you do **not mutate them**
    * Remember that string are immutable so you will need to use methods like slice,, substr, or substring to make copies of strings.
    * To make copies of objects use **Object.assign**, or the spread operator