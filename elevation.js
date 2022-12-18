
var hello
console.log(hello)
hello = 'world'


/**
 * predict output
 * undefined
 */


/*****************************************/

var needle = 'haystack'
function test(){
 var needle = 'magnet'
 console.log(needle)
}
test()

/**
 * predict output
 * magnet
 */

/*****************************************/

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/**
 * predict output
 * super cool
 */


/*****************************************/

var food = 'chicken';
console.log(food);
function eat(){
    var food 
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();


/**
 * predict output
 * chicken
 * half-chiken
 */

/*****************************************/


var mean
console.log(food);
mean = function() {
    var food
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
mean();

/**
 * predict output
 * ReferenceError
 */


/*****************************************/


var genre;
function rewind() {
    var genre 
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
var genre = "disco";

rewind();

console.log(genre);

/**
 * predict output
 * undefined
 * rock
 * r&b
 * disco
 */




/*****************************************/


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/**
 * predict output
 * TypeError
 */


/*****************************************/

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


/**
 * predict output
 * { name: 'Chicago', students: 65, hiring: true }
 * TypeError: Assignment to constant variable.
 */










