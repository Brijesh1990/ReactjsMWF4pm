/* switch case just like if elseif  where we check multiple true case choices if case is false default 

  syntax :

      switch(condition)
      {
        case 'A':
            statements;
            break;
        
        case 'B':
            statements;
            break;
        
        case 'C':
            statements;
            break;
        
        case 'D':
            statements;
            break;

        default:
             statements;
             break;           
      }

*/


var grade="A";
switch(grade)
{
    case 'A':
        console.log("chaitnay is a topper students &#9786");
        break;
     
    case 'B':
        console.log("sorry by mistake chaitnay is a average  students &#9786");
        break;
        
    case 'C':
            console.log("sorry by mistake chaitnay is failed students &#9785");
            break;    

    default: 
    console.log("sorry your grade is not found contact with admin");
    break;    


}