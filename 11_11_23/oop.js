
class Animal{
    name;
    constructor(){

        this.name="madan";
        console.log("this is a constructure");
    }
    
    static sayHello(){
        console.log("hello ..");
    }
    printName(){
        this.name="mohan";
        console.log(`name is ${this.name}`);
    }
}
class man extends Animal{
    printName(){
        super.printName();
        console.log("but real name is hahahahaha");
    }
}

let a = new Animal();

a.printName();
Animal.sayHello();//static method is only accesible thorugh the class Name itself

let b = new man();
b.printName();


console.log(Animal  instanceof man);
console.log(b instanceof Animal);