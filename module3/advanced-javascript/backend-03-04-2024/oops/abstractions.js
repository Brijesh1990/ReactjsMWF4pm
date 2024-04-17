/* 
abstractions or abstarct class : when we create a class as abstract class we can not create an object of that class. 

                                 An abstraction is a method where we hide some internal data from some users there we used abstarctions.
                                 
                                 An abstraction basically used for security reasion.

                                 An abstract class should be always access by using  inheritance.



*/


abstract class  A 
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age;
    }
}
class B extends A 
{
    constructor(nm,age,address,pincode)
    {
       super(nm,age);
       this.address=address;
       this.pincode=pincode;


    }
}

var obj=new B("brijesh",34,"150 feet ring road rajkot near and b/h alpap green city",360005);
console.log(obj);