/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 *  - order ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2,1);
rainbow.splice(2,0,"Yellow", "Green");
rainbow.splice(5,0,"Purple");


console.log(rainbow);


// your code goes here
