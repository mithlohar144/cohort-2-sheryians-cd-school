// // var arr1 = [1, 2, 3, 4, 5];

// // var arr2 = arr1


// var obj = {
//     user:"sumit",
//     age:24
// }

// var obj2  = obj;

// obj2.user = "rahul";


// var arr = [1, 2, 3, 4, 5];
// // var arr2 = [arr[0], arr[1], arr[2], arr[3],...arr[n]];
// var arr2 = [...arr];
// console.log(arr2);


// var arr = [1, 2, 3, 4, 5];
// var [a,b,c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// var arr = ["sumit", "rahul", "anil", "sachin"];

// var [ a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);


// var obj = function(user) {
//     this.user=user;
//     this.age=24;
// };


// 


// var obj2 = {...obj};
// var {user, age} = obj;
// obj2.city = "delhi";

// console.log(obj);
// console.log(user);
// var obj2 = obj;
// obj2.city = "mumbai";

// console.log(obj);
// console.log(obj2);


// var obj = {
//     user:"sumit",
//     age:24,
//     city:"delhi",
//     skills:["html", "css", "js"]
// };

// var {skills} = obj;

// var [first, ...restElemts] = skills;

// console.log(first);
// console.log(restElemts);

// // var {user} = obj;

// console.log(user);



            //////////////// import export/////////////
// import export
// code sparated
// import { maths, science} from "./app.js";
// import english,{hindi} from "./app.js";
// import hamza,{obj} from "./app.js";
// import skills from "./test.js";
// import { user } from "./test.js";
// console.log(skills);
// console.log(user);
// console.log(user);
// console.log(maths);
// console.log(hindi);
// console.log(english);

// console.log(obj.name);

// console.log(hamza);
// console.log(obj);


// function hero(){
//     console.log(" hey i'm sumit");
//     return 10;
// }
// var a = hero();
// console.log(a);

// function add(a, b){
//     // return 'hello world';
//     return a + b;
// }

// console.log(add(5, 40));
// import add from "./app.js";
// import {test} from "./app.js";

// console.log(test());

// console.log(add(5, 10));


// DSAP - ( moving animation)
// Lenis - ( scrolling smoothness)
// Three.js - ( 3d library)
// swiper js ( slider library) 

// console.log(React);
// console.log(ReactDom);

// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello React";
// document.body.appendChild(h1);





// intregration of react with html

// var h1 = React.createElement('h1', null, 'Hello React');
// var h2 = React.createElement('h2', null, "Welcome to React World");
// var div = React.createElement('div', {id: 'parent', class:'element'}, [h1, h2]);

// var root = document.querySelector('#root');

// var container = ReactDOM.createRoot(root);

// container.render(div)


// function h1(){
//     return React.createElement('h1', null, 'Hello React');

// }
// var root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(h1())


import parent from "./parent.js";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent());