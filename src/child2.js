import React,{useReducer} from 'react'
import CreatReducer from './countReducer'
import countReducer from './countReducer'

const Child2=()=>{
    let [value,dispacher]=useReducer(countReducer,30)
    return(
        <div>
            <h1>Decrementing Using Hooks & Reducer</h1>
            <p>Value of counter is {value}</p>
            <button onClick={()=>{
        dispacher('DECREMENT')
    }}>Click to Decrement</button>
        </div>
    )
}
export default Child2;