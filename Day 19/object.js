
//Person is a object name
class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    print(){
        console.log(this.firstname + " , " + this.lastname);
    }
}

var p1= new Person("Piyush", "Dahle")
p1.print();