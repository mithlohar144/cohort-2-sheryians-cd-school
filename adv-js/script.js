// oops 

// classes -> blueprint 
// (  claasses islye bnante hai taki hme baar ek naya object na banana pde)
// constructor -> ek function jo automatic chalta hai jaise hi class se nya instence banaya jaata hai Class chalen pr constructor aotumatic chalta hai




// class Romote{
//     constructor(product, color, price){
//         this.product=product;
//         this.color=color;
//         this.price=price;
//     }
//     powerOn(){
//         console.log("the machine is on now");
        
//     }
//      powerOff(){
//         console.log("the machine is off now");
//      }
// }
// let remote1 = new Romote("tv","black", 20);
// let remote2 = new Romote("ac","white", 25);

// console.log(remote1);
// console.log(remote2);


// class AlooChat{
//     constructor(){
//         this.price=50;
//         this.quantity=1;
//         this.oils="mustard oil";
//         this.chutney=true;
//         this.masale=["alloo","chana","salt","chat masala"];
//     }
//     pack(){
//         console.log("pack krooo jldii ");

//     }
//     unpack(){
//         console.log("unpack krdooo jldii ");
//     }
// }
// let alooChat1 = new AlooChat();
// alooChat1.pack();
// console.log(alooChat1);


// class Book{
//     constructor(name, price, author, color){
//         this.name=name;
//         this.price=price;
//         this.author=author;
//         this.color=color;
//     }
//     nextPage(){}
//     bookMark(){}
//     read(){}
// }

// class User{
//     constructor(){
//         this.username= "sumit";
//         this.age=21;
//         this.email="abjjdjd";
//     }
//     khanaakhaoo(){}
//     sanaLo(){}
// }

// let K1 = new Book("Moral", 120, "sumit", "blue");
// let K2 = new Book("CSE", 800, "MS dhoni", "green");
// let K3 = new Book("History", 500, "virat kohli", "red");
// console.log(K1);
// console.log(K2);
// console.log(K3);


// class Human{
//     constructor(){
//         this.name="sumit";
//         this.age=21;
//     }
    
// }

// Human.prototype.saanLo = function(){
//     console.log("Hey");
// }
// Human.prototype.khanaKhao = function(){console.log("Hey");}

// let h1 = new Human();
// let h2 = new Human();
// console.log(h1);
// console.log(h2);


// class bottel{
//     constructor(){
//         this.color="blue";
//         this.price=50;
//         this.liters=2;
//     }
//     fill(){}
//     drink(){}
// }
// let B1 = new bottel();
// let B2 = new bottel();
// console.log(BT);

// class Sketch{
//     constructor(characters, color, somefun){
//         this.characters=characters;
//         this.color=color;
//         this.somefun = function(){};
//     }
//     speak(){}
//     walk(){ }

// }
// let sketch1 = new Sketch("mickey mouse", "black and white");
// console.log(sketch1);


// let obj ={
//     fun()=>{
//         console.log(this);
        
//     }
// }


// global -> window
// function -> window
// es5 function inside object -> object
// es6 function inside es5 function -> window
// es5 function inside es5 function inside object -> window
// es6 function inside es5 function inside object -> object



// let obj = {
//     fnc: function(){
//         function ancd(){
//             console.log(this);
            
//         }
//         ancd();
//     },
// };

// obj.fnc();


// call , apply, bind
//  ek funtion me this ki value window hoti hai, or agr aap chahte ho ki koi or object ho tb app use kr skte ho call apply bind ka


// call -> fnc chalata hai and thiski value set krta hai
// apply -> wahi krta hai jo call krta hai sf arguments men phli value this ki  and dusri value hoti hai
// bind -> 
// let obj1 = {
//     name: "sumit",
// };
// function abcd(){
//     console.log(this);
    
// }
// // abcd.call(obj1); // call krke hmne this ki value obj1 krdi

// // abcd.apply(obj1, 1,2,3);

// let newfnc = abcd.bind(obj1, 1,2,3)
// console.log(newfnc);


// let Animal = class {
//     constructor(){
//         this.name="Dogo";
//         this.breed="indian"
//     }

// }
// let an1 =  new Animal;


//  Inhertance

// class Animal{
//     constructor(){
//         this.hands = 2;
//         this.legs =2;
      
//     }
//     eat(){};
//     breath(){};
// }

// class Kekda extends Animal{
//     constructor(){
//         super();
//         this.legs=8;
//         this.hands=0;
//     }
//     suru(){};
// }

// let K1 = new Kekda();
// console.log(K1);


// inheritance -> agr koi class ha ijisme kuch kuch likha hai or agr app mante ho ki nayi class usi ka exteensionhai to aap wo saaree feature purani class se borrow kr skte ho and nayi ka me apne hisb se new feature bhi add kr skte hai
// getter ->

// class marker{}
// class Blue  extends marker {}

// class Animal{
//     constructor(){
//         this._age = 12;
//     }
    
//     set age(val){
//         if(val<0){
//             console.error("not");
//             return;
//         }
//         this._age = val;
//     }
//     get age(){
//         return this._age;
//     };
// }

// let A1 = new Animal();
// A1.age = 11;
// console.log(A1);


// section 1: Object and oops thinkiing (foundation)


// let User ={
//     name:"sumit",
//     email:"sdds@gmail.com",
//     login: function(){
//         console.log("logged In");
//     }
// };

// class User {
//     constructor(name, email){
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//             console.log("logged In");
//         }
// }
// let U1 = new User("sumit", "dhfdf");
// let U2 = new User("harsg", "ddvdfdf");
// let U3 = new User("mithilesh", "cccvc");
// let U4 = new User("mith", "etet3");
// let U5 = new User("shree", "dbf");

// console.log(U1);
// console.log(U1.prototype);

// let product={
//     name:"cap",
//     price:3300,
//     discountedprice: function(){
//         this.price - 200;
//     },
// };

// console.log(product.discountedprice());


// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log(this.brand + "_" + this.speed);
        
//     }
// }
// let car1 = new Car("Alto", 190);
// let car2 = new Car("Tata", 220);
// console.log(car1.drive);


// question 3

// class sumit{
//     constructor(name, rollNumbar){
//         this.name = name;
//         this.rollNumbar = rollNumbar;
//     }
//     introduce(){
//         console.log(this.name + " " + this.rollNumbar);
        
//     }
// }
// let s1 = new sumit("sumit", 33);
// console.log(s1);


// let boj = {
//     sayName: function(){
//         console.log(this);
        
//     },
//     sayArrowName: function(){
//         console.log(this);
        
//     },
// };
// boj.sayName();
// boj.sayArrowName();


// qustion 4
// bina class ke bhi coutructor fuction banta hai
// es6 se phlre construcotr function aisa bntta tha

// function User(name){
//     this.name=name;
//     this.login = function(){
//         console.log("Loggin");
        
//     }
//     // User.prototype.login = function(){
//     //     console.log("Loginn");
        
//     // }
// }
//  let U1=new User("sumit");
//   let U2=new User("harsh");
//  console.log(U1, U2);


// sextion 5  call apply bind 

// function abcd(a, b, c, d){
//     console.log(this.name);
    
// }
// let obj = {
//     name:"sumit",
// }
 
// // abcd.call(obj);
// abcd.apply(obj, [1, 2, 3, 4])


