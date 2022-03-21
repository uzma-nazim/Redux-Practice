import incre_decre from "./constant";




const ReducerCounter = ( counter = 0  , action)=>{

    if(action.type==incre_decre.COUNTER_PLUS){
        return counter = ++counter
        
    }
    else if(action.type == incre_decre.COUNTER_MINUS){
        
        return counter = --counter
    }
    else{
         return counter
    }

}

export {ReducerCounter}
