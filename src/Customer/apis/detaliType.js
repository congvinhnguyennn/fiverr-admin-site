import axiosClient from "./axiosClient"
export const detailTypeAPI=async (typeWorkID) => {
  const { data } = await axiosClient.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/2`, {
    params: {
      id:typeWorkID
    },
  });
  return data;
};