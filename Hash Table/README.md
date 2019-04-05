# Hash Table
 
In computing, a **hash table** (hash map) is a data 
structure which implements an *associative array* 
abstract data type, a structure that can *map keys 
to values*. A hash table uses a *hash function* to 
compute an index into an array of buckets or slots, 
from which the desired value can be found

Ideally, the hash function will assign each key to a 
unique bucket, but most hash table designs employ an 
imperfect hash function, which might cause hash 
collisions where the hash function generates the same
index for more than one key. Such collisions must be
accommodated in some way.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Hash collision resolved by separate chaining.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


* Hash function
    * Fast (constant time)
    * Doesn't cluster outputs at specific indices, but distributes uniformly 
    * Deterministic (same input for an output)

* ![bigo](./bigo.PNG)
    * How good is your hash function (constant time)
    * Spread out as possible
    * Separate chaining and linear probing

* Using modulo to keep the values in the array length range
* The prime number in the hash is helpful in spreading out the keys more uniformly. 
    * Prime numbers decreases the number of collisions 
    * It is also helpful if the array that you are putting values into has a prime length

* **Separate Chaining**
    * With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
    * ![separate_chaining](./separate_chaining.PNG)

* **Linear Probing**
    * With linear probing, when we find a collision, we search through the array to find the next empty slot.
    * ![linear_probing](./linear_probing.PNG)

