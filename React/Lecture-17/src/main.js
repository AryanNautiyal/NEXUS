

// React Working 






/*

     We can write JSX without React also in JS only

     To change body colour, font-size , etc when a certain button is clicked

     We do that in JS with multiple lines of code and they are executed one by one

     But in React we can do that in a single line of code

     All of the lines can be executed in a single line so all are executed together so all changes are applied together

     We got REFLOW and REPAINT

        Reflow : When we change the structure of the DOM like adding or removing an element

        Repaint : When we change the style of an element like changing the colour, font-size, etc



    Repaint is just to paint the pixels on the screen whereas the Reflow is used to identify position of the elements

    So reflow and repaint both are expensive operations

    As finding colour of each pixel and position of each element is a costly operation

    Specially reflow is more expensive than repaint

    So this will be calculated 4 times if we do this in JS code for a button


    document.body.style.backgroundColor = "red";
    document.body.style.fontSize = "20px";
    document.body.style.padding = "10px";
    document.body.style.margin = "10px";


    So to avoid this we can do this in a single line of code in React

    So React does this in a single line of code so that reflow and repaint is done only once

    But JS is single threaded synhronous language so even if we give it as a bundle it will still execute it one by one

    We know vids are made up of multiple frames or can say images that are played in a sequence fast

    So what if we give these instructions as a bundle and execute it in 1/60 of a second (as you know in case of 60fps so used 1/60)

    So these changes will occur fast due to this and it will appear as if all changes are applied together

    So this is how React works behind the scenes, it attaches the bundle (or the 4 instructions together) to the next frame

    Hence we can see all the changes occur together (in next frame we see that the code is changed)

    But if we do like before giving 4 separately then it will take 4 frames to apply all the changes

    So there is no problem if we write in 4 lines in React as React handles it himself

    This is also called as ({[ batch updates ]}) , this is because we are giving a batch of updates together to be applied in the next frame

    So with this reflow and repaint is done only once




    React automatically makes the batches of those 4 lines whereas JS doesn't

    Need to learn segmentation to implement same in JS as we will need some lines of code to make batches and all that

    As in the end React is converted into JS only

    So React just makes batches by himself by saying I will do it myself



    So here our another concept comes into picture that is Virtual DOM

    React creates a virtual DOM by himself

    So React makes copy of the actual DOM called as Virtual DOM

    Virtual DOM is lightweight copy of the actual DOM

    In Virtual DOM there isn't many information stored as in actual DOM (i.e it is lightweight)

    Whenever we make changes in the React code it again creates a copy of the Virtual DOM

    So whenever changes are made, the React makes the copy of the latest virtaul DOM and apply changes to it

    Then it compares the latest Virtual DOM with the previous Virtual DOM (compares using Diffing Algorithm)

    Then it identifies the changes that are made

    Then it makes a batch for all the changes 

    So how React is optimized so let's say we change body colour to black and it's already black 

    When virtual DOM are created no change is shown as bg color is black only so it doesn't execute it again


*/