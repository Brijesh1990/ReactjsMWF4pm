/*constructor : constructor is same name of class whenever we called an object of class constructor automatically called

*/

class Employee 
{
    constructor(id,name,age,salary)
    {
        this.id=id;
        this.name=name;
        this.age=age;
        this.salary=salary;

    }
}
// call a method or function 
// function display()
// {

// }

var Emp=new Employee(1001,"brijesh",34,89500);
console.log(Emp);

