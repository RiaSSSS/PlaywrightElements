/*
=============================================================================
JAVASCRIPT SET
=============================================================================

What is Set?

A Set is a built-in JavaScript collection used to store UNIQUE values.

Important Points:

1. Set does not allow duplicate values.
2. Set can store different data types.
3. Set maintains insertion order.
4. Set does not use index to access values.
5. Set provides methods such as add(), has(), delete() and clear().
*/


// =============================================================================
// CREATING A SET
// =============================================================================

const courses = new Set();

const mySet = new Set();


// =============================================================================
// add() - ADD VALUES
// =============================================================================

/*
Syntax:

set.add(value);

add() is used to add a value to the Set.
*/

mySet.add(100);
mySet.add("Akash");
mySet.add(true);
mySet.add(100); // Duplicate value
mySet.add("TypeScript");

console.log(mySet);

/*
Output:

Set(4) { 100, "Akash", true, "TypeScript" }

100 is added only once because Set does not allow duplicates.
*/


// =============================================================================
// has() - CHECK WHETHER VALUE EXISTS
// =============================================================================

/*
Syntax:

set.has(value);

Returns:

true  → Value exists
false → Value does not exist
*/

console.log(mySet.has("Java"));       // false
console.log(mySet.has("TypeScript")); // true
console.log(mySet.has(100));          // true


// =============================================================================
// size - NUMBER OF VALUES
// =============================================================================

/*
size is a PROPERTY, not a method.

Correct:

mySet.size

Incorrect:

mySet.size()
*/

console.log("Set Size :", mySet.size);


// =============================================================================
// clear() - REMOVE ALL VALUES
// =============================================================================

/*
Syntax:

set.clear();

clear() removes all values from the Set.
*/

// mySet.clear();

console.log("Set Size :", mySet.size);


// =============================================================================
// ITERATE SET USING for...of
// =============================================================================

/*
Set does not have indexes like an Array.

We can use for...of to iterate through Set values.
*/

for (let value of mySet) {
    console.log(value);
}


// =============================================================================
// REMOVE DUPLICATES FROM ARRAY USING SET
// =============================================================================

const arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];

console.log("Original Array :", arr);

/*
Convert Array → Set

Duplicate values will automatically be removed.
*/

const number = new Set(arr);

console.log("Set :", number);


// =============================================================================
// CONVERT SET BACK TO ARRAY
// =============================================================================

/*
Array.from()

Converts the Set into an Array.

Set → Array
*/

const arr1 = Array.from(number);

console.log("Array :", arr1);


// =============================================================================
// ITERATE ARRAY
// =============================================================================

for (let arr2 of arr1) {
    console.log(arr2);
}


// =============================================================================
// IMPORTANT SET METHODS
// =============================================================================

/*
add(value)
→ Adds a value to the Set.

has(value)
→ Checks whether a value exists.

delete(value)
→ Removes a specific value.

clear()
→ Removes all values.

size
→ Returns the number of values.

*/


// =============================================================================
// SET - ARRAY CONVERSION
// =============================================================================

/*
Array → Set

const set = new Set(array);

Set → Array

const array = Array.from(set);

Example:

const numbers = [1, 2, 2, 3, 3];

const uniqueNumbers = new Set(numbers);

const result = Array.from(uniqueNumbers);

Result:

[1, 2, 3]
*/


// =============================================================================
// IMPORTANT INTERVIEW POINTS
// =============================================================================

/*
1. What is Set?

Set is a JavaScript collection used to store unique values.

2. Does Set allow duplicate values?

No.

Duplicate values are automatically ignored.

3. Does Set use index?

No.

Set does not provide index-based access like an Array.

4. Does Set maintain insertion order?

Yes.

Set maintains the order in which values were inserted.

5. How do you remove duplicates from an Array?

Use Set:

const unique = new Set(array);

6. How do you convert Set to Array?

Use:

Array.from(set);

or:

[...set]

7. Difference between Array and Set:

Array:
• Allows duplicates.
• Uses index.
• Uses length property.

Set:
• Does not allow duplicates.
• Does not use index.
• Uses size property.

8. Difference between Map and Set:

Map:
• Stores key-value pairs.
• Uses set(key, value).
• Uses get(key).

Set:
• Stores only values.
• Uses add(value).
• Does not have get().
*/

