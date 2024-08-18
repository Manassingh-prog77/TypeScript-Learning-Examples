var a = '1';
console.log(a);
//Another way of Declaring variable in typeScript as in case of let or var time variable
var hello = "world";
//If you try you to update value you can update it only to same type.
///Similarly in Functions also we can specify the data we are using. To take advantage of typeScript and avoid writting it without declaration of type of argument
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName("someone", "surname"));
//You can also specify return type from a function - > you can do this after argument bracket declare return type.
var getFullNamenew = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullNamenew("someone", "surname"));
//Declaring Object in TypeScript
var user = {
    name: "Monster",
    age: 30,
};
// by this way you can specify that each time you create a user you need to declare it again and again to solve this we can use
