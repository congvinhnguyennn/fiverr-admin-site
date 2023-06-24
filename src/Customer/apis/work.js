import axiosClient from "./axiosClient"
export const WorkAPI=async (WorkID) => {
  const { data } = await axiosClient.get(`/cong-viec/lay-cong-viec-chi-tiet/31`, {
    params: {
      id:WorkID
    },
  });
  return data;
};

export const CommentAPI=async(WorkID)=>{
  const { data } = await axiosClient.get(`/binh-luan/lay-binh-luan-theo-cong-viec/31`,{
    params:{
      MaCongViec:WorkID
    },
  });
  return data;
}