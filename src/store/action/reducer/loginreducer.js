import incre_decre from "./constant"


const INITAIL_State ={
    userName : "",
    userPass : ""
}



const Login_reducer = (data = INITAIL_State , LoginAction)=>{

    if(LoginAction.type == incre_decre.LOGIN_DATA){
        console.log(LoginAction.paylod.email);
        return{
            ...data,
            userName : LoginAction.paylod.email,
            userPass : LoginAction.paylod.password,
            
        }
        console.log(data.userName);
    }
    else{
        return data
    }

}

export {Login_reducer}