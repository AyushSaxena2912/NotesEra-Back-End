import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';
export function getVideoAuthToken(){
    const token = Cookies.get('token');
    return token;
}

export async function checkVideoAuthLoader(){
    const token = getVideoAuthToken();
    let getvalue;
    try{
     getvalue = await axios.get("https://noteseravideobackend.onrender.com/authlogin/checkvalidity",{
        headers:{
            Authorization :`Bearer ${token}`
        }
    })}
    catch(error){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    }
    if(!getvalue){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    }
    return null
}

export function getNotesAuthToken(){
    const token = Cookies.get('notestoken');
    return token;
}

export async function checkNotesAuthLoader(){
    const BASE_URL='https://notesera-basic-backend-d3bk.onrender.com'
    const token = getNotesAuthToken();
    let getvalue;
    try{
     getvalue = await axios.get(`${BASE_URL}/auth/checkvalidity`,{
        headers:{
            Authorization :`Bearer ${token}`
        }
    })}
    catch(error){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    }
    if(!getvalue){
        return redirect('/hacker-Samajne-wale-ke-liye-msg')
    }
    return null
}