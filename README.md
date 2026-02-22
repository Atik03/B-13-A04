1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    getElementById() → Selects only one element by its ID.
    getElementsByClassName() → Selects multiple elements by class name (returns HTMLCollection).
    querySelector() → Selects the first matching element using CSS selector.
    querySelectorAll() → Selects all matching elements using CSS selector (returns NodeList).

2. How do you create and insert a new element into the DOM?
   Create element → document.createElement()
   Add content → innerText or innerHTML
   Insert into DOM → appendChild()

3. What is Event Bubbling? And how does it work?
   Event Bubbling means an event starts from the target element and moves upward to its parent elements.
   Example:
    If you click a button inside a div →
    First button event runs → then div event runs → then body event runs.
    So events move from child → parent.

4. What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation means adding one event listener to a parent element instead of multiple child elements.
   Useful because:
    Improves performance
    Handles dynamically added elements
    Less code

5. Difference between preventDefault() and stopPropagation()?
   preventDefault() → Stops the default browser action
   stopPropagation() → Stops the event from bubbling to parent elements
   


