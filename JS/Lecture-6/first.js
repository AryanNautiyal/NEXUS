

// JavaScript Memory Allocation

let a = 10;

let b = a;

b = 30;

console.log(b);

console.log(a);

// Primitive data type vs Non-primitive data type

// Primitive data type: Immutable

// Non primitive data type: Mutable

// Object

let obj1 = {
    id:20,
    name:"Rohit"
}

let obj2 = obj1;

console.log(obj1);

console.log(obj2);

obj2.id = 30;

console.log(obj1);

console.log(obj2);

// Value of id is changed in both obj1 and obj2 , this only happens in non primitive data type

// In primitive data type this doesn't happen only change in b is seen


// So how it works?


/*

    Stack & Heap Memory (Memory = RAM)

        -- Primitive data type are stored in stack

        -- Non primitive data type are stored in heap




*/


/*                  Stack memory explanation

    The moment we create a variable like let a = 10

    It allocates it memory in stack so value 10 is stored inside a

    Then if we do let b = 30

    It allocates it memory in stack so value 30 is stored inside b

    Then if we do let c = a

    It allocates it new memory and stores value 10 inside c

    If we change c = 50 

    Then the change will only appear in c as each have different memory allocation

    This is kind of like call by value (Non primitive is called by call by reference)

    So a = 10 , b = 30 , c = 50

*/



/*                      Heap memory

    If we create an object like {id:20, name:"rohit"}

    It is stored in heap

    Whenever we create variable it is stored in stack

    So we assign object memory in stack but in this memory space value stored is the address of the location of heap where it is stored 

    Hence call by reference is used here

    Then if we create let obj2 = obj1;

    Then in this it will store the address of the obj1 so address is copied not the value

    So if we do obj2.id = 30

    Then it changes in both as both are pointing to same location

*/


/*

    8 GB RAM = 2^33 byte 

    RAM is byte addressable (means each byte will get a address)

    Address makes data easily accessable and makes sure we access the correct data 

    word is specified by the person like if they say word = 2 byte then every 2 byte will have a address

    So Why don't we do bit addressable ?

        Like even if we order something from amazon we only give house address not like keep that in my room too

        So it will be too many addresses so instead of that it is easier as 1 byte has only 8 bit so it can be said like

        delivery it till my house then from there I will see it



*/


/*

    1 GB = 1024 MB

    1 MB = 1024 KB

    1 KB = 1024 Byte

    1 Byte = 8 bits

*/



/*

    So when we do c=10 from c=50

    Then it will allocate new memory location and will leave old allocated memory and changes it's value

    So due to this memory is wasted as old allocated memory is wasted

    But why was this done so let's say c = 10 will be taking 8 bytes memory to store

    So if instead of changing it to c = 10 we do like c = "Hello Bhai Kaise Ho Aap Sabh" then it will let's say it takes 20 bytes

    So then we cannot allocate it to old neither we can shift everything down to cover up the space left by it then allocate it 

    Hence they made it allocate at the top only so it can take as much space as it wants and there is no more overhead of compaction and etc

*/



/*

    Why wasn't it done in cpp then?

        In cpp we declare the type also so then even if we change value it can be allocated to same old memory location 

        As both memory requirement will be same

*/


/*

    So the c=10 isn't deleted 

    Like if we delete a 1GB movie then also it just remove the link or address of that memory location 

    Therefore it is not deleted even when we delete it from recycle bin

    Not removed until and unless something else is allocated there (overriding data at that location)

    So it shows that location as free space when we delete so that new data can be allocated

*/


/*

    Allocating data in heap to non primitive and primitive to stack

    As heap gets majority part and stack gets small part 

    So stack memory is small

    So if array has new elements or we add new elements then it will have to again and again in stack allocate new memory 

    Hence too much overhead and device might become slow

    So all large memory requirement data type they are stored in heap and their reference is kept in stack

    As we also don't know non-primitive data type fixed size also like primitive 

    As non primitive data type size can be increased or decreased


*/

/*

    So in case of string it is handled by our v8 engine

    So if it thinks that string is too large for stack them it allocates string the memory in heap

*/


// Stack memory is fast as only one access 

// But heap memory is slow as in stack it's reference is stored so 1st access reference then access data on heap


// In js we cannot print address as there's no functionality for it