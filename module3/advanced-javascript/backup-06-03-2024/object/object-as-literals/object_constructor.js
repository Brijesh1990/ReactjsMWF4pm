// object as constructor : object as constructor is same name of class 
function Employee(nm,lnm,age,salary)
{
 
    this.nm=nm;
    this.lnm=lnm;
    this.age=age;
    this.salary=salary;

}
var emp=new Employee("brijesh","pandey",34,8545);
console.log(emp);





// class employee 
// {
//     constructor(id,nm,age,salary)
//     {
//         super();
//         this.id=id;
//         this.nm=nm;
//         this.age=age;
//         this.salary=salary;
        
//     }
// }

// class Hr extends employee 
// {
//     constructor()
//     {
//         super();

//     }
// }
// // var emp=new Hr();
