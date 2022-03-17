import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {publicRequest} from "../requestMethods";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const register = async (user) => {

    try{
        const res = await publicRequest.post("/auth/register",user);
    }catch{}
}

export const order = async (order) => {
    try{
        const res = await publicRequest.post("/orders",order);
    }catch{}
}

