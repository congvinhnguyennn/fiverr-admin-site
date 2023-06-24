import axiosClient from "./axiosClient"


export const getCareerAPI = async () => {
    const {data} = await axiosClient.get("/api/cong-viec");
    return data;
};


export const getCareerdetailAPI = async (careerId)=>{
    const { data } = await axiosClient.get(`/api/cong-viec/${careerId}`);
    return data;

}

export const getCareermenu = async() => {
    const { data } = await axiosClient.get("/api/cong-viec/lay-menu-loai-cong-viec");
    return data;
}

export const getCareermenudetail = async () =>{
    const { data } = await axiosClient.get("/api/cong-viec/lay-cong-viec-theo-chi-tiet");
    return data;
}

export const getCareerfromMenu = async (idCareer) => {
    const {data} = await axiosClient.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${idCareer}`);
    return data;
}