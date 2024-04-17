/* method overriding : method overriding is used to access any class properties using same functions pass with same arguments

   
*/

class  A 
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age;
    }
}
class B extends A 
{
    constructor(nm,age)
    {
       super(nm,age);
    
    }
}

var obj=new B("brijesh",34);
console.log(obj);