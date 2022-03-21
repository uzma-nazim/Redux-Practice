
import { Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap"

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./login.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "./store/action/loginaction.js"
import { useNavigate } from "react-router-dom";
const Login = () => {



    let [email, setemail] = useState("")
    let [password, setPaassword] = useState("")

    let dispatch = useDispatch()

let navigate = useNavigate()
    

    const LoginUser = (e) => {

        !email && !password ? alert("Required"): navigate("/dashboard")

        dispatch(LoginAction({ email, password }))
        

        setemail("")
        setPaassword("")


    }
    return (
        <>

            <div className={style.main}>
                <div className={style.loginContainer}>
                    <h1>LOGIN</h1>


                    <Form >
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <FormLabel>Email address</FormLabel>
                            <FormControl value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" />
                            <FormText className="text-muted">
                                We'll never share your email with anyone else.
                            </FormText>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" value={password} onChange={(e) => setPaassword(e.target.value)} placeholder="Password" />
                        </FormGroup>
                        <FormGroup className="mb-3" controlId="formBasicCheckbox">
                            <FormCheck type="checkbox" label="Check me out" />
                        </FormGroup>
                        <Button onClick={LoginUser} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login