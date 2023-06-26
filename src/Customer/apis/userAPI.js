import axiosClient from "./axiosClient";

export const APIlogin=async(values)=>{
    const {data}= await axiosClient.post("/api/auth/signin",values);
    return data;
}