var emp={
    "id":1001,
    "name":"brijesh",
    "age":34
    }

var res=JSON.stringify(emp);    
// console.log(res);
// console.log(typeof(res));

var res1=JSON.parse(res);// convert into json object
console.log(typeof(res1));
