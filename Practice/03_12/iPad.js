
class iPad {
    constructor(
        //define parameters
        size,
        generation,
        owner
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

export default iPad;

const iPad = {
    size: 10,
    generation: "Third",
    owner: "Cacau",
    color: {
        insideColor: "grey",
        outsideColor: "white",
    },
    turnOn = "On",
}