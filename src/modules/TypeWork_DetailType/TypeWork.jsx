import React,{useState,useEffect} from 'react'
import { typeWorkAPI } from '../../apis/typeWork';
function TypeWork({typeWorkID}) {
  const [typeWork,setTypeWork]=useState([]);
  const getTypeWork=async()=>{
    try{
      const data=await typeWorkAPI(typeWorkID);
      setTypeWork(data.content)
    }
    catch(error){
      console.log(error);
    }
  }
    useEffect(() => {
    getTypeWork();
  }, []);
  return (
    <div>
      <div
      className="mt-4 bg-cover bg-center bg-gradient-to-b text-center from-blue-500 to-blue-800 text-black py-4 px-6 h-3xl"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Welcome to Fiverr!</h1>
          <p className="mt-2">Explore our amazing products and offers.</p>
          <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
          Learn More
          </button>
        </div>
      </div>
      <div className='mt-3'>
        <h4 className='pl-3'>Most popular in </h4>
      <div className="flex mt-3 list-work">
        <div className="flex-1 p-12 border border-gray-300 hover:shadow-lg transition-all detail-work">
          <div className="flex items-center">
            <img className="h-20" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png" alt="" />
            <span className="tbody-5 text-semi-bold mx-2">Logo</span>
          </div>
        </div>
        <div className="flex-1 p-12 border border-gray-300 hover:shadow-lg transition-all detail-work">
          <div className="flex items-center">
            <img className="h-20" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png" alt="" />
            <span className="tbody-5 text-semi-bold mx-2">Illustration</span>
          </div>
        </div>
        <div className="flex-1 p-12 border border-gray-300 hover:shadow-lg transition-all detail-work">
          <div className="flex items-center">
          <img className="h-20" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png" alt="" />
          <span className="tbody-5 text-semi-bold mx-2">Website Design</span>
          </div>
        </div>
        <div className="flex-1 p-12 border border-gray-300 hover:shadow-lg transition-all detail-work">
          <div className="flex items-center">
            <img className="h-20" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png" alt="" />
            <span className="tbody-5 text-semi-bold mx-2">Architecture & Interior Design</span>
          </div>
        </div>
        <div className="flex-1 p-12 border border-gray-300 hover:shadow-lg transition-all detail-work">
          <div className="flex items-center">
            <img className="h-20" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ace985608fce227eb6477959645d09ed-1680446271839/ai%20atrists.png" alt="" />
            <span className="tbody-5 text-semi-bold mx-2">AI Artists</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TypeWork