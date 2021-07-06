/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

*


* 1. Window Binding         -  if none of the other rules apply the "this" keyword defaults to the window object unless you are in                                   strict mode in which case it returns undefined.

* 2. Implicit Binding       -  "this" points to the object on which the function is called (what's to the left of the dot when the                                   function is called).

* 3. Explicit Binding       -  We can tell the JavaScript Engine to set "this" to point to a certain value using call, apply or                                      bind.call, and apply can be used to invoke a function with a specific value for this.

* 4. New Binding            -  Using the new keyword constructs a new object, and "this" points to it.


*

* write out a code example of each explanation above
*/


//
// Principle 1
// code example for Window Binding


// 'use strict';

// function adam(){
//     console.log(this.code);
// }
// const code = "Window Binding";

// adam();
// console.log(code);



//
// Principle 2
// code example for Implicit Binding

// let Me = {
//     name: 'Adam',
//     topic: 'Implicit Binding',
//     code2: function(){
//         console.log(this.topic)
//     }
// }

// Me.code2(); //Invoking Function



//
// Principle 3
// code example for New Binding

// function NotAdam(says){
//     this.tell = says;
// }
// let I = new NotAdam('New Binding');

// console.log(I.tell);


//
// Principle 4
// code example for Explicit Binding

//CALL
// function adam(){
//     console.log(this.is)
// }

// const Me = {
//     name: 'Adam',
//     is: 'Explicit Binding "CALL"',
// }
// adam.call(Me);


//BIND
// function adam(){
//     console.log(this.is);
// }
// let Me = {
//     name: 'Adam',
//     is: 'Explicit Binding',
// }
// let otherMe = {
//     name: 'Not Me',
//     is: 'Explicit Binding "BIND"',
// }

//Bind Me to adam and put in newMe
// newMe = adam.bind(Me);
// newMe();

//Bind otherMe to adam and put in newOtherMe
// newOtherMe = adam.bind(otherMe);
// newOtherMe();

