import incre_decre from "./reducer/constant";


const counterPlus  = (value)=>{

    return(dispatch)=>{
        dispatch({
            type: incre_decre.COUNTER_PLUS


        })

    }
}


let counterMinus = (value)=>{
    console.log(value);

    return(dispatch)=>{
        dispatch({
            type : incre_decre.COUNTER_MINUS
        })

    }

}
export {counterPlus ,counterMinus }