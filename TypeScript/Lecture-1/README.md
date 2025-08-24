


<!-- sudo npm install -g typescript -->

Used this command to globally install typescript compiler

npm install -g typescript gives error as we need admin access to download it and -g = Global

So we can access TS compiler in our system anywhere

We write sudo for admin access, it asks us password 



<!-- tsc -v        or          tsc -version -->

Use one of these to check the version of the typescript installed


<!-- tsc ${file_name}.ts -->

Used this to run the Ts file 

It makes a JS file corresponding to it

<!-- tsc app.ts --target es2016 -->

Used this to specify the target version of JS we want this file to be converted too


But this is too much labour so we will download configuration file for it to avoid doing tsc app.ts --target es2016

Config file contains configurations of TS (it will itself tell the TS to convert it into which version of JS)

<!-- tsc --init -->

With this command we get TS config file

<!-- tsc -->

Then we can use this it converts all the TS files to corresponding JS


<!-- tsc --watch -->

Used this command so that it starts converting TS to JS side by side

like if I enter 2 letter in JS file there will be same 2 letters also 


<!-- To exit watch write control + c -->


<!-- Read all these -->

Interpreted language
Compile time language
JIT (Just In Time)