


*** How data is stored in memory ***

1 : Insert 
2 : Update
3 : Delete
4 : Search
5 : Range 

[Range is like for example we want all people with last name Negi so it's a range]

So if our data is stored in sorted order then for searching operation O(N) time will be taken in DB

Similarly if we store our data in sorted manner then it will take O(log N) this is wrong  as each document is of different size 
as someone can have longer name someone can have shorter name so log N was only used because in binary search each element was of equal size (int [2 byte or 4 byte]) hence here we cannot say log N time 


So we cannot use binary search here due to variable size of data

So in sorted data also we will be needed to search linearly so it will take O(N) time 

So searching operation will take O(N) time only in sorted and unsorted both


So for insertion operation in unsorted data it will take O(1) time to insert whereas in sorted data it will take O(N) time as first it will be needed to search for the correct position then it will be needed to move the rest of the data one space back 



For deletion operation it will take O(N) time in both sorted and unsorted data

For update operation it will take O(N) time in both sorted and unsorted 


So from here we can see that there is no use in keeping data sorted


So what can we do so that we get advantage so we can do indexing like will store the data address in array according to index or order they are in so then we can search in an array 

so we will store id and address of data in an array so according to id then we can search in O(log N) time 

*** Refer to top section in excalidraw image ***



There is no need to keep data stored in sorted format in SSD as we only need to keep it in sorted order in array and rest we are using the array to access locations


Due to array it is taking us time for insertion so we will use other data structure to store the id and address of the location of the data corresponding to that id

So we will use Binary Search Tree (BST) for this  (Most correct answer is AVL Tree)

As it's insertion time is O(log N) or in best case O(1)

But in worst case binary search tree can take O(N) time if the tree is left skewed or right skewed

So we will use ***AVL Tree*** as it's self balance tree using balance factor it balances the tree and O(log N) is the time it takes for insertion, deletion and search

So we are not only choosing tree for this reason only as if we take example of Instagram so they have unique either username or phone number or email id but email id and username are string and their size is not fixed hence we use tree only as in array it will lead to problems

So we will use something unique to differentiate between them all

So in tree the size of each node isn't fixed only thing we will see is that the node structure will be like this


-------------------------------------------
| left child |   Data     |   right child |
| address    |            |   address     |
-------------------------------------------


So in case of string we will compare letter by letter to insert, delete and search in tree




