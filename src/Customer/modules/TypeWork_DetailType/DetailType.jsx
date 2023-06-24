import React,{useState,useEffect} from 'react'
import { detailTypeAPI } from '../../apis/detaliType';
import {AiOutlineArrowDown} from "react-icons/ai"
import Collapse from 'react-collapse';
function DetailType({typeWorkID}) {
     const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const [detail,setDetail]=useState([])
    const getDetail=async()=>{
        try{
            const data=await detailTypeAPI();
            setDetail(data.content)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getDetail()
    },[])
   const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    const updatedItems = [...expandedItems];
    updatedItems[index] = !updatedItems[index];
    setExpandedItems(updatedItems);
  };
     const list=()=>{
    if(windowSize.width < 46.25*16)
    {
        return (
            <div>
               {detail.flatMap((nhom)=>(
                   nhom.dsNhomChiTietLoai.map((item,index)=>{
                    return  <article className='p-6 border-b border-gray-300' key={item.id}>
                                <div>
                                    <div className='d-flex align-items-center cursor-pointer' onClick={() => handleToggle(index)}>
                                        <img src={item.hinhAnh} alt="" className='rounded-md h-20 w-20' />
                                        <h3 className='ml-6'>{item.tenNhom}</h3>
                                    </div>
                                </div>
                                 {expandedItems[index] && (
                                    <div className='mt-3'>
                                         {item.dsChiTietLoai.map((type)=>{
                                        return <p key={type.id}>
                                                {type.tenChiTiet}
                                                </p>
                                    })}
                                    </div>
                                )}
                            </article>
                   })
                ))}
            </div>
        )
    }
    else{
        return ( <div className='container'>
                <div className='row'>
                   {detail.flatMap((nhom) => (
       nhom.dsNhomChiTietLoai.map((item)=>{
       return <div className='col-3 mt-3' key={item.id}>
        <img className='h-40' src={item.hinhAnh} alt="" />
        <h4>{item.tenNhom}</h4>
        {item.dsChiTietLoai.map((type)=>{
            return <p key={type.id}>
                {type.tenChiTiet}
            </p>
        })}
       </div>
       })
      ))}
                </div>
            </div>)
    }
  }
  return (
    <div>
        <div className='mt-3'>
            <h4 className='pl-3'>Explore</h4>
             {list()}
        </div>
    </div>
  )
}

export default DetailType