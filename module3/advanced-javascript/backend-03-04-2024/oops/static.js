/* 
static  method  : when we create a static  method inside of class we can not access outside of class scope in object;
static  method only access inside of scope of class  
*/

class A 
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age;
    }
    static Hello()
    {
        return "My name is Shivam";
    }

    // Hello()
    // {
    //     return "My name is Shivam";
    // }
}
 const ab=new A("brijesh",32);
 console.log(ab);
 console.log(ab.Hello());