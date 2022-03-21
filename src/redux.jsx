
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./counter.css"
import {counterPlus ,counterMinus}  from "./store/action/action"


const Redux = () => {
    

    
    let state = useSelector(state => state.ReducerCounter)
    let dispatch = useDispatch()
    const Handle = ()=>{
        // console.log(state);
        dispatch( counterPlus())


    }

    let MinusHandle = ()=>{
        // console.log(state);
        dispatch(counterMinus())
    }
    return (
        <>
            <h2>Counterr</h2>


            <div className="counter" >
                <button onClick={Handle} >+</button>
                <p>{state}</p>
                <button onClick={MinusHandle }>-</button>
            </div>
        </>
    )
}
export default Redux