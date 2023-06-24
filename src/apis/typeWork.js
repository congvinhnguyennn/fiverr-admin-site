import axiosClient from "./axiosClient"
export const typeWorkAPI=async (typeWorkID) => {
  const { data } = await axiosClient.get(`/loai-cong-viec/1`, {
    params: {
      id:typeWorkID
    },
  });
  return data;
};