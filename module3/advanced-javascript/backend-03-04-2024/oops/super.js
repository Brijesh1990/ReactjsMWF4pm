/* super  : is a method i.e used to access parent class properties inside of child class

   super(name, age);
   this.name=name;
   this.age=age;
   


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
    constructor(nm,age,address,pincode)
    {
       super(nm,age);
       this.address=address;
       this.pincode=pincode;


    }
}

var obj=new B("brijesh",34,"150 feet ring road rajkot near and b/h alpap green city",360005);
console.log(obj);