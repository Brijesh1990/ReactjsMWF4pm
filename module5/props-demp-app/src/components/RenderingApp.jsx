import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(
    document.getElementById('root')
);


function App()
{
    // return (
    // <>
    // <RenderingApp />
    // <h2>The time is it : {new Date().toLocaleTimeString()}</h2> 
    // </>

    // )

    const element=(

         <>
            <h2>The time is it : {new Date().toLocaleTimeString()}</h2> 
            {/* console.log(element); */}
         </>

    )
    // root.render(console.log(element));

    root.render((element));

}

setInterval(App,1000);
   

export default App
