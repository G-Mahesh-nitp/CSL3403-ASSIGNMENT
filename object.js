
function Person (FirstName,LastName,OfficeAddress){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.OfficeAddress = OfficeAddress;
}

var person1 = new Person("Rahul","Sharma","Mumbai");
var person2 = new Person("Karthik","Kumar","Patna");
var person3 = new Person("Ekshita","Angel","Hyderabad");

console.log(person1);
console.log(person2);
console.log(person3);