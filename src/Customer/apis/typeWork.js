import axiosClient from "./axiosClient"
export const typeWorkAPI=async (typeWorkID) => {
  const { data } = await axiosClient.get(`/api/loai-cong-viec/${typeWorkID}`, {
  });
  return data;
};