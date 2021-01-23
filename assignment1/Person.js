/*Create a Person class (in a file named "Person.js") with the following:
Properties:
name (String)
favoriteColor (String)
Methods:
constructor()
Should accept two arguments and store their values as part of the class
speak()
This function should use console.log() to show the person's name in their favorite color*/

class Person {

    constructor(name, favoriteColor){
      this.name = name;
      this.favoriteColor = favoriteColor;
    }
  
    speak() {
      console.log(this.name, this.favoriteColor);
    }
  }

  export default Person;

