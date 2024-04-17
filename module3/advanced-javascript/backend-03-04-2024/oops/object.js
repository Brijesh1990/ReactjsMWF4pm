/*
object is an entity and declared in javascript inside {}
object is an instance of class 
object is co-related to its class
object is defined via new keyword
object is collection of classess

var n=new Classname();

*/

class pet 
{
    constructor(petname)
    {
        this.petname=petname;
    }
}
var ob=new pet("My pet name is Tiger");
console.log(ob);