const a = '1';
console.log(a);

//Another way of Declaring variable in typeScript as in case of let or var time variable
let hello: string = "world";
//If you try you to update value you can update it only to same type.

///Similarly in Functions also we can specify the data we are using. To take advantage of typeScript and avoid writting it without declaration of type of argument
const getFullName = (name: string, surname: string)=>{
    return name + ' ' + surname;
};

console.log(getFullName("someone","surname"));

//You can also specify return type from a function - > you can do this after argument bracket declare return type.
const getFullNamenew = (name: string, surname: string):string=>{
    return name + ' ' + surname;
};

console.log(getFullNamenew("someone","surname"));

//Declaring Object in TypeScript

const user :{name:string, age:number} = {
    name: "Monster",
    age: 30,
};
// by this way you can specify that each time you create a user you need to declare it again and again to solve this we can use
//Instead of specifying content dataType of user again and again
//Simply create a User interface

interface User{
    name: string;
    age: number;
    //To set any field not mandatory in interface 
    address?: string; 
    //Functions in interfaces
    getMessage(): string;
}

//Now to create User Use this interface
const user3: User = {
    name: "Monster",
    age: 30,
    //address field was not mandatory so we can skip to declare it
    //declaring the function using interface
    getMessage() {
        return "Hello" + name;
    },
}


