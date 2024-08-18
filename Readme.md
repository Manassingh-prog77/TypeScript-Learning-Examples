Learning TypeScript
TypeScript is a SuperSet of JavaScript -->

TypeScript File cannot be executed directly in Browser so we need to compile it to java therefore we need to run tsc main.ts command where main is the file name of typeScript file which will give main.js file for main.ts file which we can use.

Benefits of Learning TypeScript is that we will see our code directly in our editor and we will not get any runtime error

Watch Mode
You can also use watch mode command directly in your terminal so that if there is any error it will show directly on saving the file like shown in nodemon  

for this you need to learn command : - tsc main.ts -w 
where main.ts is name of file

Variable Declaration
It is done in similar way as in javaScript i.e. which is var,let,const

in typeScript you can only change value being within same type as if one time you declare it of type string then next time when you update or change it's value to string only

Avoid creating too many interfaces as it make hard for new Programmers to debug your code and make possible improvements

we have never return type functions also which will never end you need to write throw "never" to stop them
For ex->
  const doSomething = (): never =>{
    throw "never";
  }
