

npm is used to bring all the codes in npm registry to bring it in our local system

To execute this code we use 

npx parcel index.html

    "or"

npx parcel <html file name>



🚨 Build failed.

@parcel/core: 
Library targets are not supported in serve mode.
              

  /Users/aryan/Desktop/NEXUS/React/Lecture-3/package.json:5:11
    4 |   "description": "\"Learn\"",
  > 5 |   "main": "app.js",
  >   |           ^^^^^^^^ Target declared here
    6 |   "scripts": {
    7 |     "test": "echo \"Error: no test specified\" && exit 1"

  💡 The "main" field is meant for libraries, not applications. Either remove the "main" field or choose a different target name.


  

Was giving this error so removed main line from the package.json



<!-- .parcel-cache -->

Using this it builds the server faster

As if we delete it then run command it will take 329ms to build server (ms === milliseconds)

If we don't delete it then it takes 3ms something

It stores all the cache data related to the server created

This folder may contain thousands of files — it holds precompiled code, dependency info, and file metadata



🔍 Why is it used?

To avoid rebuilding everything every time you save a file

Makes Parcel super fast after the first build


----------------------------------------------------

<!-- dist -->


So bundler writes our code in optimized way but where is our code gone in parcel when we have run 

So to write production ready code we delete existing dist folder as our production ready code goes in dist folder only

so then we give command <npx parcel build ${file_name.html}>



<!-- Note : To exit npx used control + c -->

So now we got production ready code in dist folder so we copy it and paste to make it's copy 

Then we delete the .map file as we don't need it

Then we can just use these code for production

and if we see it's size it is only 200KB only


<!-- .map file can bring our old JS code back from production code file -->

<!-- 

        So in production ready JS code we see that we cannot read it but it is good as if we write any business logic there then our rivals can also see our business logic also so we don't want that to happen

 -->


 <!-- Hence we also delete map file so that they cannot decode our code -->

 <!-- Prodcution code also optimizes the images (compress them) -->

 
 <!-- Notes -->


 While uploading on netlify

 HTML file name = index.html

 CSS file name = style.css

 JS file name = script.js

 Images in dist are also compressed so use other method in url() image

 