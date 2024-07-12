//Task 01
//installation completed


//Task 03
let personName: string = "Aiysha Noor";
//in lowercase
console.log("lowercase;", personName.toLowerCase());

//on uppercase
console.log("uppercase;", personName.toUpperCase());
//title case
console.log("titlecase;", personName.replace(/\b\w/g,c=> c.toUpperCase()));

//Task 4
let quote:string = "A person who never made a mistake never tried anything new.";
let author: string ="Albert Einstein";
console.log (`${author}once said,quote"`)

//Task 5 
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said "${quote}"`;

console.log(message);

//Task 6
let personName: string ="\t\n\ John Doe \n\t"
console.log("original,:", personName);
console.log("Stripped:", personName.trim())


//Task 7 and 8 
console.log(5+3)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//Task 9 :printing  my favourite number
//revealng my favourite number in a message format
let favoriteNumber: number = 4;
console.log (`My favorite number is ${favoriteNumber}.`);

//Task 10 
//author:  [Aiysha Noor]
//date: [Saturday , June 2024]


//Task 11
let names : string [] = ["Ali","Haseeb","Wajahat","Muzammil"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Task 12
let names : string[] = ["Ali","Haseeb","Wajahat","Muzammil"];

let message : string = "Do you like to play football"
console.log(names[0] +" "+ message)
console.log(names[1] +" "+ message)
console.log(names[2] +" "+ message)
console.log(names[3] +" "+ message)

//Task 13 
let  transportation : string [] =  ["Honda Motorcycle", "Audi", "Honda City"];
transportation.map((items) => console.log(`I would like to own a ${items}`));

//Task 14
let guestArr : string [] = ["Ali","Wajaht","Muzzamil"];

guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)))

//Task 15
let guestArr : string [] = ["Ali","Muzammil","wajaht"];
let canNotAttend : string = "Ali"

console.log(cant attend dinner+ " " +"can't attend dinner.")

let newGuest : string = "Alishba"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr) 

guestArr.map((items) =>
console.log(`Dear ${items}, You are invited to the dinner`)
 )

 //Task 16
 let guestArr : string[] = ["Alishba", "Haseeb","Muzammil","Wajahat"];

let canNotAttend : string = "Muzammil"

let newGuest : string = "Ali"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr) 

guestArr.map((items) =>
  console.log(`Dear ${items}, I found a bigger dinner table so i invited more peoples.`)
);

let guestBeg : string = "Moiz"
guestArr.unshift(guestBeg);
console.log(guestArr)

let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

guestArr.push("Fatima")
console.log(guestArr)

guestArr.map((items) =>
console.log (`Dear ${items}, you are invited in the more people list on dinner`));

 //Task 17
 let guests: string[] = ["Ali","Bilal","Carry","Dawood","Hamza"];

console.log("Due to limited space, only two people can be invited for dinner.");
while (guests.length > 2){
  const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

guests.forEach((guest) => {
    console.log(`Dear ${guest},you're still invited to dinner.`);
    });

    guests.pop();
    guests.pop();
     console.log("Final guest list:", guests);
     
//Task 18 
let placesToVisit: string[] = ["Tokyo","Pakistan","America","Japan"];

console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order after sorting:", placesToVisit);
console.log("Reverse alphaberical order:", placesToVisit);
console.log("Original order after reverse sorting:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order", placesToVisit);

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

//Sort the array in alphabetical order 
placesToVisit
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reveerse alphabetical order:", placesToVisit);

//Task 19
let guests: string[] = ["Ali" , "Bilal" , "Carry" , "Dawood","Hamza"];
console.log("Due to limited space, only two people can be invited for dinner.");

while (guests.length > 2) { 
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.pop();
guests.pop();

let invitations : string [] = ["Ali", "Bilal"]
let count_invitations : number = invitations.length

console.log(`${count_invitations} people will come to the dinner.`)

//Task 20
let country: string [] = ["Pakistan", "India","Saudia Arabia","China","Japan"]
console.log("List of country");
console.log(country);

//Task 21
let person: {name: string, fname: string , age: number} = {name:"Aiysha Noor", fname: "female", age: 21}
console.log(person)

//Task 22
const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days[7])
console.log(days[6])

//Task 23
let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda cit'? predict true")
console.log(car != 'honad city')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.length == 3? predict false")
console.log(car.length ==3)

console.log("is car.length == 10? predict true")
console.log(car.length !==10)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)


console.log("is 72 => 83 ? predict false")
console.log(72 >= 83 )

console.log("is car == 'subaru' && car.length == 6? predict true")
console.log(car == 'subaru' && car.length == 6)

Task 24
if (`age_1 == 18 || age_2 != 21`){
    console.log("person is eligible not for vote")
}

let country : string [] = ["pakistan","india","china","japan"]
if (country.includes("pakistan")){
  console.log("Pakistan is in country list")
}

if (!country.includes("america")){
        console.log("america is not included in array")
}

Task 25
let alien_color ="green"

if ('alien_color == "green"')
console.log( "you earn 5 points")

let alien_color : string = "red"
if (alien_color == "red")
   console.log("no output")

//Task 26
let alien_color = "green"

if (alien_color == "green"){
    console.log("player just earned 5 points for shooting the alien")
} else {
    console.log("player just earned 10 points")
}

let alien_color = "red"

if (alien_color == "green"){
    console.log("player just earned 5 points for shooting the alien")
} else {
    console.log("player just earned 10 points")
  }

  //Task 27
let alien_color: string = "yellow"

if (alien_color == "green") {
    console.log("5 points")
} else if (alien_color == "yellow") {
    console.log("10 points")
} else { 
    console.log("15 points")
}

//Task 28
let age : number = 18

if (age < 2) {
   console.log("you are a baby")
} else if (age < 4) {
    console.log("you are a todler")
} else if (age < 13) {
    console.log("you are a kid")
} 
else if (age < 20) {
    console.log("you are a teenager")
} 
else if (age < 65) {
    console.log("you are a adult")
} 
else {
    console.log("you are a older")
}

//Task 29
let favourite_fruits : string [] = ["kivi","orange","apples","berry","peach"]

if (favourite_fruits.includes("kivi")) { 
    console.log("kivi")
}

if (favourite_fruits.includes("apples")) {
    console.log("apples ")
}

if (favourite_fruits.includes("orange")) {
    console.log("orange")
}

if (favourite_fruits.includes("peach")) {
    console.log("you really like bananas")
}

if (favourite_fruits.includes("berry")) {
    console.log("you really like bananas")
}

//Task 30
let users : string [] = ["admin","eric","haseeb","fatima"]

for(let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
    }else { 
        console.log(` Hello ${user}, thank you for logging in again`)
    }
}


//Task 31
let users : string [] = ["admin","eric","haseeb","ali","fatima"]

if (users.length ===0) {
    console.log ("We need to find some users!")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log ("Hello admin,would you like to see a report?")
       } else {
       console.log (`Hello ${user}, thank you for logging in again`)
       }
    }
}

users = []
if (users.length ===0) {
    console.log("we need to find some users!")
}

//Task 32
let current_user : string [] = ["admin","Eric","Aliza","Hamza","fatima"]
let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower : string [] =current_user.map(user => user.toLocaleLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
    console.log(`Yes ${new_user}, is still in availaible list`)
    }
}

//Task 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers) {

if (number ===1) {
    console.log(`${number}st`)
} else if (number === 2){
    console.log (`${number}nd`)
} else if (number === 3) {
    console.log(`${number}rd`)
} else {
    console.log (`${number}th`)
}
}

//Task 34
let favourite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]

for (let pizza of favourite_pizza) {
    console.log(pizza)
}

console.log ("\n")

for (let pizza of favourite_pizza) {
    console.log(` I really like ${pizza} pizza!`)
}

console.log ("\nI really love pizza!")

//Task 35
let animals : string [] = ["cat","lion","dog"]

for (let animal of animals) {
    console.log(animal)
}
 console.log ("\n")

for (let animal of animals) {
    console.log (` A ${animal} has a tail`)
} 
console.log ("\n all of these are great pets! but i love cats more")
  

//Task 36
function makeShirt(size: string, text: string): void {
  console.log(`\n you order a ${size} shirt that says ${text}`)
}

makeShirt('large',`" i love typescript"`)
makeShirt(`medium`,`"i need a big shirt"`) 

//Task 37
function makeShirt(size: string = 'large', text: string = ' I love typescript'): void {
  console.log(`you have order a ${size}, shirt that says ${text}`)
}


makeShirt();
makeShirt('medium')

makeShirt('small','I need a big shirt to wear')


//Task 38
function describe_city(city: string, country: string = 'Pakistan'): void{
  console.log(`${city} is in ${country}`)
}

describe_city('Karachi')
describe_city('France', 'Europe')
describe_city('Lahore', 'Pakistan')

//Task 39 
function cityCountry(city: string, country: string ): string{
  return `${city}, ${country}`
}

let c1 = cityCountry('Lahore', 'Pakistan')
let c2 = cityCountry('Tokyo' ,'Japan')
let c3 = cityCountry('Paris', 'France')

console.log(c1)
console.log(c2)
console.log(c3)

//Task 40
function makeAlbum (artist: string, title:string): { artist: string; title: string} {
  const dictionaries = { 
  artist: artist.charAt(0).toUpperCase() + artist.slice(1),
      title: title.charAt(0).toUpperCase() + title.slice(1)
  };
  return dictionaries;
}

let album = makeAlbum("Ali", "light")
console.log(album)

album = makeAlbum("Bilal", "red wave")
console.log(album)

album = makeAlbum("Hamza", "seenbreeze")
console.log(album)

//Task 41
function show_magicians(magicians: string[]): void {

  for (const magician of magicians) {
      console.log(magician.charAt(0).toUpperCase() + (magician.slice(1)))
      }
}

const magician: string[] = ["Ali","Hamza","Bilal"]
show_magicians(magician)

//Task 42
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] +   '  the great' 
   }
}

const magicians2: string[] = ["usman","haseeb","wajahat"];
make_great(magicians2)
show_magicians(magicians2)


//Task 43
function make_great2(magicians: string[]): string[] {
   const greatMagicians: string[] = [];
   for (let i = 0; i < magicians.length; i++) {
   greatMagicians.push(magicians[i] + ' the Great');
   }
  return greatMagicians
}    

const magicians3: string[] = ["usman","haseeb","wajahat"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3)
show_magicians(greatMagicians2)

//Task 44
function sandwich(...items: string[]): void {
  console.log("Sandwich order:")

  for (let i = 0; i < items.length; i++) {
    console.log(`-${items[i]}`)
  }
}
console.log ("enjoy your sandwich aiysha noor");


sandwich ('capsicum' , 'tomato' , 'chicken')
sandwich ('beef' , 'cheese')
sandwich ('garlic' , 'chicken' , 'mayo sauce')


//Task 45
type car = {
  manufacture: string
  model: string
  [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
  return{
      manufacture,
      model,
      ...optional
  }
}

const mycar: car = createCar("toyota","corolla",{ color: "silver", year: "2024"})
console.log(mycar)
