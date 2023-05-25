 import React,{useState} from "react"
import "./App.css"

const App=()=>{
    const[result,setResult]=useState("")

    const clickHandler=(e)=>{
        setResult(result.concat(e.target.value))
    }
    const clearHandler=()=>{
        setResult("")
    }

    const Calculate =()=>{
        setResult(eval(result))
    }

    return(
        <div className="calc">
        <h1>My Calculator created </h1>
        <input type="text" placeholder="0" value={result} id="answer"/>
        <input type="button" value="9" className="button" onClick={clickHandler}/>
        <input type="button" value="8" className="button" onClick={clickHandler} />
        <input type="button" value="7" className="button" onClick={clickHandler}/>
        <input type="button" value="6" className="button" onClick={clickHandler}/>
        <input type="button" value="5" className="button" onClick={clickHandler}/>
        <input type="button" value="4" className="button" onClick={clickHandler}/>
        <input type="button" value="3" className="button" onClick={clickHandler}/>
        <input type="button" value="2" className="button" onClick={clickHandler}/>
        <input type="button" value="1" className="button" onClick={clickHandler}/>
        <input type="button" value="0" className="button" onClick={clickHandler}/>
        <input type="button" value="." className="button" onClick={clickHandler}/>
        <input type="button" value="+" className="button" onClick={clickHandler}/>
        <input type="button" value="-" className="button" onClick={clickHandler}/>
        <input type="button" value="*" className="button" onClick={clickHandler}/>
        <input type="button" value="/" className="button" onClick={clickHandler}/>
        <input type="button" value="%" className="button" onClick={clickHandler}/>
        <input type="button" value="clear" className="button button1" onClick={clearHandler}/>
        <input type="button" value="=" className="button button1" onClick={Calculate}/>
       
      
    

        </div>
    )
}
export default App;
