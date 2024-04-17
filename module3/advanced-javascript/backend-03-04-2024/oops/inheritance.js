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

var xyz=new pet("patel farms house","My tigers are living there");
console.log(xyz);