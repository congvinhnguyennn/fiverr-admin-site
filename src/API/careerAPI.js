import axiosClient from "./axios";

export const getCareerAPI = async () => {
    const {data} = await axiosClient.get("/api/cong-viec");
    return data;
};