import { useSelector } from "react-redux"
import Login_reducer from "./store/action/reducer/combineReducer"

const  Dashboard = ()=>{

    const {userName , userPass}= useSelector((state) =>state.Login_reducer)

    console.log(userPass ,userName );
    return(
        
        <>

        <h1>Dashboard</h1>
        <br/>
        

        
        <h1>Name: {userName}</h1>
        <h4> Password: {userPass} </h4>


        </>

    )
}

export default Dashboard