var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var username = "olex";
//If a var can be of different types and you need to differenciate between them then
var username1 = 1;
//Creating Func and declaring returnType
var doSomething = function () {
    console.log("do something");
};
//you can declare any function with any type also if not sure about return type
//Type -> unknown
var vUnknown = 10;
// you cannot assign this type of variable to other types
// like if you do
// let s2: string = vUnknown;
// you will get an error Type 'unknown' is not assignable to type 'string'.
//but you can counter this problem by assining it to desired type
//this way
var s2 = vUnknown;
//you cannot  do this  conversion with other types so you want to use unknown only
//Type - Casting
// type conversion
//Common Error done during using querySelector
//They make selected query as any to remove error 
// const someElement1 = document.querySelector(".foo");
// console.log("someElement", (someElement1 as any).value)
//Right Way
// Consider it to be HTMLInputElement so that typescript will understand that it's a HTML Element
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
//Adding a Listener
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
//Classes in TypeScript
var NewUser = /** @class */ (function () {
    function NewUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    NewUser.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return NewUser;
}());
//Creating Object of a Class
var newuser = new NewUser("Name", "Surename");
console.log(newuser.getFullname());
var checker = /** @class */ (function () {
    //Building Constructor
    function checker(name) {
        this.firstName = name;
    }
    //it's compulsory to implement this function
    // if you remove this function a error will come
    checker.prototype.getFullName = function () {
        return this.firstName;
    };
    //static properties
    checker.maxAge = 50;
    return checker;
}());
var userchecker = new checker("UserName");
//This will give you a error
// console.log(userchecker.maxAge);
//Accessing this static field through class
//Now you can see you can access it through class
console.log(checker.maxAge);
//Inheritance in TypeScript
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(checker));
var admin = new Admin('Foo');
console.log(admin);
//Generics in TypeScript :- Read some text also regarding it then analyise the example
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var newer = {
    name: "Jack",
};
var result = addId(user);
console.log("result", result);
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
var Status;
(function (Status) {
    Status[Status["notStarted"] = 0] = "notStarted";
    Status[Status["inProgress"] = 1] = "inProgress";
    Status[Status["done"] = 2] = "done";
})(Status || (Status = {}));
console.log(Status.inProgress);
