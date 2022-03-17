import React, { useState } from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'
import { register } from '../redux/apiCalls'
import { Link } from 'react-router-dom'
import {
    useHistory ,
    Redirect
  } from "react-router-dom";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
     url("https://media.istockphoto.com/photos/womens-fashion-clothes-and-accessories-isolated-on-white-background-picture-id831844152") center;
    display: flex;
    align-items:center;
    justify-content: center;
`

const Wrapper = styled.div`
    width:40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor:pointer;
`

const Error = styled.span`
    color:red;
    display: flex;
`


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isvalid, setIsvalid] = useState("");
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        // setIsvalid("false");
        if(validate()){
            register({username,email,password});
            history.push("/");
        }
        else {
            // register({username,email,password});
            // history.push("/");
            console.log("failed");
        }
    };

    const validate = () => {
        setIsvalid("true");
        if (!username) {
            setIsvalid("false");
            errors["username"] = "Please enter your username.";
            
        }
        if (!email) {
            setIsvalid("false");
            errors["email"] = "Please enter your email.";
        }
        if (typeof email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                setIsvalid("false");
                errors["email"] = "Please enter valid email.";
            }
        }
        if (!password) {
            setIsvalid("false");
            errors["password"] = "Please enter your  password.";
            

        }
        if (!confirmpassword) {

            setIsvalid("false");

            errors["confirmpassword"] = "Please enter your confirm password.";
            

        }
        if (typeof password !== "undefined" && typeof confirmpassword !== "undefined") {
            if (password !== confirmpassword) {

                setIsvalid("false");

                errors["confirmpassword"] = "Password don't match.";

            }

        }
        
        return isvalid;
    }


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>

                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="confirmpassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    
                    <Button onClick={handleClick} >CREATE</Button>
                    
                </Form>
                {errors && <Error>{errors.username }</Error>}
                
                {errors && <Error>{errors.email}</Error>}

                {errors && <Error>{errors.password}</Error>}

                {errors && <Error>{errors.confirmpassword}</Error>}
                
            </Wrapper>
        </Container>
    )
}

export default Register
