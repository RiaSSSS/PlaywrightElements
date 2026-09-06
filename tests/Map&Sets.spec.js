/*=============================================================================
JAVASCRIPT MAP
=============================================================================

What is Map?

A Map is a built-in JavaScript collection used to store data
in the form of key-value pairs.

Key → Value

Example:

"name" → "Rohit"
"age"  → 50

Important Points:

1. Map stores data in key-value pairs.
2. Keys can be of ANY data type.
3. Values can be of ANY data type.
4. Map maintains insertion order.
5. Keys are unique.
6. If the same key is added again, its value is updated.
7. Map provides built-in methods such as set(), get(), has(), delete()
   and clear().
*/


// =============================================================================
// CREATING A MAP
// =============================================================================

const map = new Map();

console.log("Empty Map :", map);


// =============================================================================
// set() - ADD KEY-VALUE PAIR
// =============================================================================

/*
Syntax:

map.set(key, value);

set() is used to add a new key-value pair to the Map.
*/

map.set("name", "Rohit");
map.set("age", 50);
map.set("course", "Playwright");

console.log("Initial Map :", map);


// =============================================================================
// UPDATING VALUE
// =============================================================================

/*
If the key already exists,
set() updates the existing value.

Here "age" already exists,
so its value will be changed from 50 to 60.
*/

map.set("age", 60);

console.log("After Updating Age :", map);


// =============================================================================
// get() - READ VALUE
// =============================================================================

/*
Syntax:

map.get(key);

get() is used to retrieve the value associated with a key.

If the key does not exist,
get() returns undefined.
*/

console.log("Name :", map.get("name"));
console.log("Age :", map.get("age"));
console.log("Course :", map.get("course"));

console.log("City :", map.get("city"));


// =============================================================================
// has() - CHECK WHETHER KEY EXISTS
// =============================================================================

/*
Syntax:

map.has(key);

has() checks whether the specified key exists in the Map.

Returns:

true  → Key exists
false → Key does not exist
*/

console.log("Has Name :", map.has("name"));
console.log("Has Name1 :", map.has("name1"));
console.log("Has City :", map.has("city"));


// =============================================================================
// size - NUMBER OF KEY-VALUE PAIRS
// =============================================================================

/*
size is a PROPERTY, not a method.

Correct:

map.size

Incorrect:

map.size()
*/

console.log("Map Size :", map.size);


// =============================================================================
// keys() - GET ALL KEYS
// =============================================================================

/*
keys() returns an iterator containing
all keys present in the Map.
*/

console.log("All Keys :");

for (let key of map.keys()) {
    console.log(key);
}


// =============================================================================
// values() - GET ALL VALUES
// =============================================================================

/*
values() returns an iterator containing
all values present in the Map.
*/

console.log("All Values :");

for (let value of map.values()) {
    console.log(value);
}


// =============================================================================
// entries() - GET ALL KEY-VALUE PAIRS
// =============================================================================

/*
entries() returns an iterator containing
key-value pairs.

Each entry looks like:

[key, value]

Example:

["name", "Rohit"]
["age", 60]
*/

console.log("All Key-Value Pairs :");

for (let [key, value] of map.entries()) {
    console.log(`${key} : ${value}`);
}


// =============================================================================
// delete() - REMOVE A KEY-VALUE PAIR
// =============================================================================

/*
Syntax:

map.delete(key);

delete() removes the specified key-value pair.

Returns:

true  → Element was successfully deleted
false → Key was not found
*/

console.log("Delete Course :", map.delete("course"));

console.log("Map After Delete :", map);


// =============================================================================
// clear() - REMOVE ALL DATA
// =============================================================================

/*
Syntax:

map.clear();

clear() removes all key-value pairs from the Map.
*/

// map.clear();

// console.log("Map After Clear :", map);


// =============================================================================
// MAP WITH DIFFERENT DATA TYPES
// =============================================================================

/*
Map keys can be of different data types.

String key
Number key
Boolean key
Object key
Array key
*/

const mixedMap = new Map();

mixedMap.set("name", "Rahul");
mixedMap.set(101, "Employee");
mixedMap.set(true, "Active");

console.log("Mixed Map :", mixedMap);

console.log(mixedMap.get("name"));
console.log(mixedMap.get(101));
console.log(mixedMap.get(true));


// =============================================================================
// MAP WITH OBJECT AS KEY
// =============================================================================

/*
Unlike normal JavaScript objects,
Map allows objects to be used directly as keys.
*/

const user = {
    id: 1,
    name: "Rohit"
};

const userMap = new Map();
console.log("User Map :", userMap);
userMap.set(user, "Active");


console.log("User Status :", userMap.get(user));


// =============================================================================
// PROPERTY VS METHOD
// =============================================================================

/*

PROPERTY

Stores information.

Example:

map.size

No () is used.


METHOD

Performs an action.

Examples:

map.set()
map.get()
map.has()
map.delete()
map.clear()
map.keys()
map.values()
map.entries()

*/


// =============================================================================
// IMPORTANT MAP METHODS
// =============================================================================

/*

set(key, value)
→ Add or update a key-value pair.

get(key)
→ Get value associated with a key.

has(key)
→ Check whether a key exists.

delete(key)
→ Delete a key-value pair.

clear()
→ Remove all key-value pairs.

keys()
→ Get all keys.

values()
→ Get all values.

entries()
→ Get all key-value pairs.

size
→ Returns the number of key-value pairs.

*/


// =============================================================================
// IMPORTANT INTERVIEW POINTS
// =============================================================================

/*

1. What is Map?

Answer:

Map is a JavaScript collection used to store data
in key-value pairs.

----------------------------------------------------

2. Can Map have duplicate keys?

No.

Keys must be unique.

If the same key is added again,
the existing value is updated.

----------------------------------------------------

3. Can Map have duplicate values?

Yes.

Multiple keys can have the same value.

----------------------------------------------------

4. Can Map keys be objects?

Yes.

Map keys can be strings, numbers, booleans,
objects, arrays, functions, etc.

----------------------------------------------------

5. Does Map maintain insertion order?

Yes.

Map maintains the insertion order of its entries.

----------------------------------------------------

6. What does get() return if the key does not exist?

undefined.

----------------------------------------------------

7. Difference between size and length?

Map uses:

map.size

Array uses:

array.length

----------------------------------------------------

8. Is size a method?
No.

size is a property.

Correct:

map.size

Incorrect:

map.size()

----------------------------------------------------

9. What is the difference between Object and Map?

Object:

• Keys are mainly strings or symbols.
• Access using dot or bracket notation.
• Object.keys(), Object.values(), Object.entries() are commonly used.

Map:

• Keys can be any data type.
• Provides built-in methods such as set(), get(), has(), delete().
• Maintains insertion order.
• Uses size property.

----------------------------------------------------

10. When can Map be useful in Automation?

• Store test data as key-value pairs.
• Store API response data.
• Maintain environment-specific values.
• Store headers and configuration data.
• Map usernames to passwords.
• Map test case IDs to test results.
• Store element names and corresponding values.

*/