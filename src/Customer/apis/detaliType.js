import axiosClient from "./axiosClient"
export const detailTypeAPI=async (typeWorkID) => {
  const { data } = await axiosClient.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${typeWorkID}`);
  return data;
};