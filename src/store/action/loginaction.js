import incre_decre from "./reducer/constant"

const LoginAction = (value)=>{
        console.log(value);
    return(dispatch)=>{
        dispatch({
            type : incre_decre.LOGIN_DATA,
            paylod:value

        })
        

    }

}

export  {LoginAction}