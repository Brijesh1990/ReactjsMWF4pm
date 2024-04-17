/* A=>B=>C=>D=>E*/ 

/*  
inheritance : inheritance is an method where we used parent class properties inside of its child class i.e called inheritance.
   inheritance used via extends keyword 


       single inheritance


*/ 

class mammal
{
    constructor(nm)
    {
        this.nm=nm;
    }
}
class pet extends mammal
{
    // constructor(nm,name)
    // {
    //     super(nm,name);
    //     this.nm=nm;
    //     this.name=name;

    // }
    // constructor(nm,name)
    // {
    //     super(nm);
    //     this.nm=nm;
    //     this.name=name;

    // }

    constructor(nm,name)
    {
        super(nm);
        // this.nm=nm;
        this.name=name;

    }
}

class PetFood extends pet
{
    constructor(nm,name,food)
    {
        super(nm,name);
        // this.nm=nm;
        this.food=food;
    }
}

var xyz=new PetFood("patel farms house","My tigers are living there","My tiger eat daily pedigri");
console.log(xyz);