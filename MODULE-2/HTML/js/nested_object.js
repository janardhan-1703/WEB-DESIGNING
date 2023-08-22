const person = {
    firstname:"lokesh",
    lastname:"kanagaraj",
    age:30,
    address:{
        street:"dubai main road",
        city:"dubai",
        state:"dubai",
        zipcode:"99999",

    },
    occupation: "engineer"
};
//axis in properties of main object
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.occupation);

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipcode);