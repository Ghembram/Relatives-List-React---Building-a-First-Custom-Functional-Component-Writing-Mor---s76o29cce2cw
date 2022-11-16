import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives =['Uncle','Aunty','Cousins','Brother in Law'];

        return(
            <div id="main">
               <ol key='relativList'>
            {relatives.map((name,index)=>{
        return <li key={`relativeListItem${index+1}`}>{name}</li>
        })}
            </ol>
            </div>
        )
    }
}


export default App;
