/*Create a class using your first name (for example, mine would be "Dan.js") with the following:
Should extend the Person class
Should use super() in its own constructor() to pass the arguments to what it is extending
Should import the "Person.js" file.*/

import Person from "./Person.js";

class Kayla extends Person {

    constructor (){
        super("Kayla", "Purple");
    }
}

export default Kayla;