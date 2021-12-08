/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class iPad {
    constructor(
        //define parameters
        size,
        generation,
        owner,
        color
    ){
    //define properties
    this.size = size;
    this.generation = generation;
    this.owner = owner;
    this.color = {
        inside: insideColor,
        outside: outsideColor, 
    };
    this.turnOn = turnOn;
    }
//Add methods like normal functions:
    switchOn(powerStatus) {
        this.turnOn = powerStatus;
    }
}

export default iPad