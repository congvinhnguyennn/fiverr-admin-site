import axiosClient from "./axiosClient";
export const WorkAPI=async (careerId) => {
  const { data } = await axiosClient.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${careerId}`);
  return data;
};

export const CommentAPI=async(careerId)=>{
  const { data } = await axiosClient.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${careerId}`)
  return data;
}
export const PostCommentAPI=async(values)=>{
  
  const {data}=await axiosClient.post("/api/binh-luan",values)
  return data
}