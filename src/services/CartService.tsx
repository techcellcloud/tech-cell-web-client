import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";

export const apiGetPublicProvinces = () => new Promise(async(resolve,rejects) =>{
    try{
        const respone = await axios({
            method:'GET',
            url:"https://vapi.vnappmob.com/api/province"
        })
        resolve(respone);
        console.log(respone);
    }catch(error){
        rejects(error);
    }
})

export const apiGetPublicDistrics = (idProvince:any) => new Promise(async(resolve,rejects) =>{
    try{
        const respone = await axios({
            method:'GET',
            url:`https://vapi.vnappmob.com/api/province/district/${idProvince}`
        })
        console.log(respone);
        resolve(respone);
    }catch(error){
        rejects(error);
    }
})

export const apiGetPublicWard = (idDistrics:any) => new Promise(async(resolve,rejects) =>{
    try{
        const respone = await axios({
            method:'GET',
            url:`https://vapi.vnappmob.com/api/province/ward/${idDistrics}`
        })
        resolve(respone);
    }catch(error){
        rejects(error);
    }
})