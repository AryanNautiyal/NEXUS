


*** Why AVL wasn't enough for implementation of indexing of DB ***

In AVL it was like this


---------------------------------------------------------
| left child |  id   |    address       |   right child |
| address    |       |   of data in DB  |   address     |
---------------------------------------------------------


So we don't take AVL tree for this instead we use B+ Tree


(Tracks and sector in hard disk in OS discussed here)

So we cannot just read 1 byte of data from disk as disk sends data on the basis of sectors (For example Block read : 4KB)

So whole sector is brought into RAM then whole sector is read and 1 byte of data that we wanted is read also in the sector (hence we got our data)

MongoDB reads 4KB at a time so for write also the whole sector is written



So each node in AVL is read when we are performing any operation so let's say our one node is 40 bytes so we cannot only read 40 bytes

---------------------------------------------------------
| left child |  id   |    address       |   right child |
| address    |       |   of data in DB  |   address     |
---------------------------------------------------------

The above is the node (not including the document)


So it will bring the whole sector to RAM then it is read so if we are only going to read the whole sector isn't it better to store more data at the same level so that whenever any operation is done the whole sector is useful as in AVL Tree case it is just wasting the resources 


This is why we used B+ Tree here (B+ similar to B tree)





                                                -------------------------------------------------------------
                                                | left child |  Data |  address   |  Data   |   right child |
                                                | address    |       |  of child  |         |   address     |
                                                -------------------------------------------------------------
                                               /                            |                               \
                                              /                             |                                \
                                             /                              |                                 \
                                            v                               |                                  v
-------------------------------------------------------------               |         -----------------------------------------
| Data       |  Data |  Data      |  Data   |   Data        |               |         |  Data  |   Data    |   Data    | Data |
|            |       |            |         |               |               |         |        |           |           |      |
-------------------------------------------------------------               |         -----------------------------------------
                                                                            |
                                                                            |                   
                                                                            |                                                       
                                                                            | 
                                                                            | 
                                                                            v
                                                    -------------------------------------------------------------               
                                                    | Data       |  Data |  Data      |  Data   |   Data        |               
                                                    |            |       |            |         |               |               
                                                    -------------------------------------------------------------                                                               

This is B Tree 

So the whole first one is stored in a sector so that it occupies the whole sector and the resources are not wasted then as we will be needed to read the whole sector either way (just to give an idea)


B+ Tree is slightly different from it 


*** Searching in B+ Tree ***

Refer to image by Rohit Negi 

So if we need to search 28 in that diagram so we first see that 28<30 so we go towards left then we see 28 (but the location of id = 28 data is only given in leaf node)

So we see that 28>20 and 28=28 so we go right as in middle 20<=x<28 only there so we go right and we reach the laaf node 

In leaf node we see 28 and to the left of 28 the address is present where the data is stored 


So we can see that there is one extra block to the right most so that block points to sibling leaf node for range operations 


So in simple terms the data is repeated of parents and the conditions are as follows :

            -- Left node < Current Value or Left Child values < Parent value

            -- Right node >= Current Value or Right Child values >= Parent value



So it will try to approximately cover the whole sector (might add some dummy data to make it exactly sector size)

Biggest advantage of B+ Tree is that it can handle range queries efficiently



So in MongoDB we see that data is stored and it looks similar to JSON data but it's not JSON it's BSON (Binary JSON)

it's called BSON because we can enter date also inside it and also binary numbers too

In JSON there was no different datatype called date but in BSON it is there

