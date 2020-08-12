import React,{useContext} from 'react'
import countContext from './countContext'

const Child1=()=>{
let counterValue=useContext(countContext)
    return(
    <div>
    <h1> Incrementing Using Hooks & Context Api</h1>
    <p>Value of counter is {counterValue[0]}</p>
    <button onClick={()=>{
        counterValue[1](++counterValue[0])
    }}>Click to Increment</button>
    </div>
    )
}
export default Child1;