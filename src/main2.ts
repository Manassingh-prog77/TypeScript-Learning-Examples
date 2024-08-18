let username: string = "olex";

//If a var can be of different types and you need to differenciate between them then

let username1:string|number = 1;

//It can be both number and string type
//You can do same with Interfaces like if you have User named Inetrface then
// let user: User | null = null;

// You can write type aliases and use it everywhere in your cod
//alias created
type ID = string; 

interface UserInterface {
    id: ID;     //Using alias for telling type of field
    name: string;
    surname: string;
}

//Using aliases is a Good way as you can use it multiple ways
//You can create Union Type aliase also like
type PopularTag = string;
//Union type aliase
type MostPopularTag = PopularTag | null;

//Creating Func and declaring returnType
const doSomething = (): void =>{
    console.log("do something");
};

//you can declare any function with any type also if not sure about return type

//Type -> unknown
let vUnknown: unknown = 10;
// you cannot assign this type of variable to other types
// like if you do
// let s2: string = vUnknown;
// you will get an error Type 'unknown' is not assignable to type 'string'.
//but you can counter this problem by assining it to desired type

//this way
let s2:string = vUnknown as string;
//you cannot  do this  conversion with other types so you want to use unknown only

//Type - Casting
// type conversion

//Common Error done during using querySelector
//They make selected query as any to remove error 
// const someElement1 = document.querySelector(".foo");
// console.log("someElement", (someElement1 as any).value)

//Right Way
// Consider it to be HTMLInputElement so that typescript will understand that it's a HTML Element
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value)

//Adding a Listener
someElement.addEventListener('blur', (event)=>{
    const target = event.target as HTMLInputElement;
    console.log('event', target.value)
})

//Classes in TypeScript
class NewUser{
    public firstName: string;
    private lastName: string;
    readonly unchangeName: string;

    constructor(firstName:string,lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

//Creating Object of a Class
const newuser = new NewUser("Name" , "Surename");
console.log(newuser.getFullname());

//Declaring public class
// in this class NewUser you can see firstName as public & LastName as private
//All this classes public, private & protected when are same when code is compiled in js in typeScript only it is different
//To implement it in js compiled code you can write readonly instead of private class
//As it makes it inaccessible as in NewUser class unchangable name is a readonly type of class
//So if we create a function that try to change readonly it will blink you error which guides you that you can change it's value

//Implementing a Interface :-

/*if a class implements a interface then it becomes compulsory to implement all fields of that interface in 
class which helps to keep check on class that all fields are compulsory implemented*/

interface check{
    getFullName(): string;
}

class checker implements check{
    public firstName: string;
    //static properties
    static readonly maxAge = 50;

    //Building Constructor
    constructor(name: string){
        this.firstName = name;
    }
    //it's compulsory to implement this function
    // if you remove this function a error will come
    getFullName(): string {
        return this.firstName;
    }
}

const userchecker = new checker("UserName");
//This will give you a error
// console.log(userchecker.maxAge);

//Accessing this static field through class
//Now you can see you can access it through class
console.log(checker.maxAge);

//Inheritance in TypeScript
class Admin extends checker{
    private editor: string;

    setEditor(editor: string): void{
        this.editor = editor;
    }

    getEditor(): string{
        return this.editor;
    }
}

const admin = new Admin('Foo');
console.log(admin);

//Generics in TypeScript :- Read some text also regarding it then analyise the example

const addId = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

const newer = {
    name: "Jack",
};

const result = addId(user);
console.log("result",result);

//Generics for Interfaces

interface data<T>{
    name: string;
    data: T;
}

//also use more than one generic 
// interface data<T,V>{
//     name: string;
//     data: T;
//     meta: V;
// }

//enum in TypeScript
// const Status = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(Status.inProgress);

//This code will work same to it
enum Status{
    notStarted,
    inProgress,
    done,
}
console.log(Status.inProgress);

//And here Status is becomed a datatype as to use it
let notStartedStatus: Status = Status.notStarted;
// Now you can not assign any other dataType to this variable beacuse it's of type Status else it will give you a error
// notStartedStatus = "foo"; This will give error
//But it will work normally
notStartedStatus = Status.done;

//using enums in interfaces
interface Task{
    id: string;
    status: Status;  //Making interface of type enums
}
//It is advisable to name a enum with a suffic or prefix as enum to give clarity

//Outro
