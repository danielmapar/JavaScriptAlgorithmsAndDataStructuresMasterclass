# Problem Solving Approach

* How do you improve?
  * **Devise** a plan for solving problems
  * **Master** common problem solving patterns

* Steps
  * Understand the problem
  * Explore concrete examples
  * Break it down
  * Solve/Simplify
  * Look back and refactor

* **Step 1** - Understand the problem:
  1. Can I restate the problem in my own words?
  2. What are the inputs that go into the problem?
  3. What are the outputs that should come from the solution of the problem?
  4. Can the outputs be determined by the inputs? In other words, do I have enough information to solve the problem?
  5. How should I label the important pieces of data that are part of this problem?

**Example**:
Write a function that takes two numbers and return the sum

  1. Implement addition
  2. What types of numbers (float/double? upper bound)? are they both mandatory? we will only support two numbers?
  3. Same as 2 (should it return string? int? float?)

* **Step 2** - Explore concrete examples:
  * Coming up with examples can help you understand the problem
    * Sanity check
    * User stories
  1. Start with simple examples
  2. Progress to more complex examples
  3. Explore examples with empty inputs
  4. Explore examples with invalid inputs

Example: Write a function which takes in a string and returns counts of each character in the string

1. `chatCount("aaaa")`: `{a: 4}`
2. `chatCount("hello")`: `{h: 1, e: 1, l: 2, o: 1}`
3. `chatCount("my phone number is 123123")`
  * Should we account for spaces? numbers? upper case? lower case?
4. Empty inputs: `charCount()`
5. Invalid inputs: `charCount(null)`

* **Step 3** - Break it down:
  * Explicitly write out the steps you need to take
  * This forces you to think about the code you will write before you write it.

```javascript
function chatCount(str) {
  // make object to return at the end
  // loop over string for each character
    // if x
    // if y
  // return object at end
}
```

* **Step 4** - Solve/Simplify

1. Find the core difficulty in what you are trying to do
2. Temporary ignore that difficulty
3. Write a simplified solution
4. Incorporate that difficulty back

Example: Write a function which takes in a string and returns counts of each character in the string

```javascript
charCount("Your PIN number is 1234!")

function charCount(str) {

}
```

* **Step 5** - Look back and refactor
