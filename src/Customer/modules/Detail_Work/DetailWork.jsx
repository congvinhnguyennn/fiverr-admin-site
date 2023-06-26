import React,{useState,useEffect} from 'react'
import { WorkAPI,CommentAPI,PostCommentAPI } from 'Customer/apis/work';
import { getCareerdetailAPI } from 'Customer/apis/careerAPI';
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux'
import {AiFillLike,AiFillDislike,AiFillClockCircle,AiOutlineCheck,AiOutlineArrowDown} from "react-icons/ai"
function DetailWork({careerId}) {
    const { isAuth } = useSelector((state) => state.userReducer);
    const obj=careerId;
    const parse=parseInt(obj.careerId)
    const com=3000;
    const currentUser = useSelector((state) => state.userReducer.user)
    const maNguoiDung=currentUser && currentUser.user.id
    const {register,handleSubmit}=useForm({
    defaultValues: {
      id:com,
      maCongViec:parse,
      maNguoiBinhLuan:maNguoiDung,
      ngayBinhLuan:"20/02/2023",
      noiDung:"",
      saoBinhLuan:5
    },
    })
    const onSubmit =async (values) => {
        const data = await PostCommentAPI(values);
  };

  const onError = (errors) => {
    console.log(errors);
  };
  const handleButtonClick = () => {
    // Perform some actions here

    // Refresh the page
    window.location.reload();
  }
    const [selectedOption, setSelectedOption] = useState('Basic');

    const handleLabelClick = (option) => {
        setSelectedOption(option);
  };
    const renderContent = () => {
    if (selectedOption === 'Basic') {
      return (
       <div className='pt-6'>
                    <div className="relative pr-4 pl-4 ">
                        <header className='pb-2 leading-2'>
                            <h4 className='d-flex justify-content-between'>
                                <b>Most Popular</b>
                                <div className='d-flex align-items-end pl-2'>
                                    <span>US$10</span>
                                </div>
                            </h4>
                            <p>1 Basic Logo design Concept, JPEG and PNG (transparent background) file, No Mascot Design</p>
                        </header>
                        <article>
                            <div className='d-flex mb-2'>
                                <div className='d-inline-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiFillClockCircle/>
                                    </span>
                                    <b className='ml-2'>2 days delivery</b>
                                </div>
                                <div className='d-inline-flex align-items-center ml-4'>
                                     <span className='bg-transparent border-none inline-block m-0 p-0'>
                                       <AiFillClockCircle/>
                                    </span>
                                    <b>3 Revisions</b>
                                </div>
                            </div>
                            <ul className='mb-2'>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck/>
                                    </span>
                                    Design Customization.
    
                                </li>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Content Upload
                                </li>
                                 <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck/>
                                    </span>
                                    Responsive Design
                                </li>
                            </ul>
                        </article>
                    </div>
                    <footer className='d-flex flex flex-column pb-2'>
                        <button className='border border-solid border-transparent rounded-md box-border cursor-pointer inline-block text-base font-semibold leading-none px-6 py-3 relative text-center no-underline '>Continue</button>
                        <button className='d-flex justify-content-center pt-3 text-green-500'>Compare Package</button>
                    </footer>
                </div>
      );
    } else if (selectedOption === 'Standard') {
      return (
       <div className='pt-6'>
                    <div className="relative pr-4 pl-4 ">
                        <header className='pb-2 leading-2'>
                            <h4 className='d-flex justify-content-between'>
                                <b>High Selling</b>
                                <div className='d-flex align-items-end pl-2'>
                                    <span>US$45</span>
                                </div>
                            </h4>
                            <p>2 modern minimalist Logo design concept, source/vector file formats in (Ai, EPS, SVG, PDF, PSD)</p>
                        </header>
                        <article>
                            <div className='d-flex mb-2'>
                                <div className='d-inline-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiFillClockCircle/>
                                    </span>
                                    <b className='ml-2'>2 days delivery</b>
                                </div>
                                <div className='d-inline-flex align-items-center ml-4'>
                                     <span className='bg-transparent border-none inline-block m-0 p-0'>
                                       <AiFillClockCircle/>
                                    </span>
                                    <b>3 Revisions</b>
                                </div>
                            </div>
                            <ul className='mb-2'>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck/>
                                    </span>
                                    Design Customization
                                </li>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Content Upload
                                </li>
                                 <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck/>
                                    </span>
                                    Responsive Design
                                </li>
                            </ul>
                        </article>
                    </div>
                    <footer className='d-flex flex flex-column pb-2'>
                        <button className='border border-solid border-transparent rounded-md box-border cursor-pointer inline-block text-base font-semibold leading-none px-6 py-3 relative text-center no-underline '>Continue</button>
                        <button className='d-flex justify-content-center pt-3 text-green-500'>Compare Package</button>
                    </footer>
                </div>
      );
    } else if (selectedOption === 'Premium') {
      return (
       <div className='pt-6'>
                    <div className="relative pr-4 pl-4 ">
                        <header className='pb-2 leading-2'>
                            <h4 className='d-flex justify-content-between'>
                                <b>VIP</b>
                                <div className='d-flex align-items-end pl-2'>
                                    <span>US$100</span>
                                </div>
                            </h4>
                            <p>3 premium Logo concept, 3D mockup, Priority support, unlimited revisions, All file formats</p>
                        </header>
                        <article>
                            <div className='d-flex mb-2'>
                                <div className='d-inline-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiFillClockCircle/>
                                    </span>
                                    <b className='ml-2'>1 days delivery</b>
                                </div>
                                <div className='d-inline-flex align-items-center ml-4'>
                                     <span className='bg-transparent border-none inline-block m-0 p-0'>
                                       <AiFillClockCircle/>
                                    </span>
                                    <b>10 Revisions</b>
                                </div>
                            </div>
                            <ul className='mb-2'>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Design Customization
                                </li>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Content Upload
                                </li>
                                 <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Responsive Design
                                </li>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Web Design
                                </li>
                                <li className='d-flex align-items-center'>
                                    <span className='bg-transparent border-none inline-block m-0 p-0'>
                                        <AiOutlineCheck color='green'/>
                                    </span>
                                    Custom Services
                                </li>
                            </ul>
                        </article>
                    </div>
                    <footer className='d-flex flex flex-column pb-2'>
                        <button className='border border-solid border-transparent rounded-md box-border cursor-pointer inline-block text-base font-semibold leading-none px-6 py-3 relative text-center no-underline '>Continue</button>
                        <button className='d-flex justify-content-center pt-3 text-green-500'>Compare Package</button>
                    </footer>
                </div>
      );
    }
  };
    const [color,setColor]=useState('black');
    const handleColor=()=>{
         if (color === 'black') {
        setColor('blue');
    } 
        else {
      setColor('black');
    }
    }
     const [color1,setColor1]=useState('black');
    const handleColor1=()=>{
         if (color1 === 'black') {
        setColor1('red');
    } 
        else {
      setColor1('black');
    }
    }
    const [comment,setComment]=useState([]);
    const getComment=async()=>{
        try {
            const data=await CommentAPI(parse)
            setComment(data.content);
        } catch (error) {
            console.log(error);
        }
    }
     useEffect(()=>{
        getComment()
    },[])
    const [work,setWork]=useState([]);
    const getWork=async()=>{
        try {
            const data=await WorkAPI(parse)
            setWork(data.content)
        } 
        catch (error) {
        console.log(error);    
        }
    }
    useEffect(()=>{
        getWork()
    },[])
 const avatar=work.map((item)=>{
    return item.avatar
 })
 const tenNguoiTao=work.map((item)=>{
    return item.tenNguoiTao
 })
 const [career, setCareer] = useState({})
  const getCareerdetail = async () => {
    try {
      const data = await getCareerdetailAPI(parse);
      setCareer(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCareerdetail();
  }, []);
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
  const price=()=>{
    return (
        <div className='col-lg-4 price mt-3'>
                <div className='border border-solid border-gray-700 border-l-0'>
                <div className='d-flex'>
                    <label className={`font-bold p-4 text-center flex-1 border border-solid border-gray-700 border-l-0 text-gray cursor-pointer ${
                    selectedOption === 'Basic' ? 'text-green-500' : '' }`} onClick={() => handleLabelClick('Basic')}>Basic</label>
                    <label className={`font-bold p-4 text-center flex-1 border border-solid border-gray-700 border-l-0 text-gray cursor-pointer ${
                    selectedOption === 'Standard' ? 'text-green-500' : ''}`} onClick={() => handleLabelClick('Standard')}>Standard</label>
                    <label className={`font-bold p-4 text-center flex-1 border border-solid border-gray-700 border-l-0 text-gray cursor-pointer ${
                    selectedOption === 'Premium' ? 'text-green-500' : ''}`}  onClick={() => handleLabelClick('Premium')}>Premium</label>
                </div>
                    {renderContent()}
                </div>
            </div>
    )
  }
  return (
    
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-lg-8 col-12'>
                {/* <h3>{work && work[0].congViec.tenCongViec}</h3> */}
                <h3>{career.tenCongViec}</h3>
                <div className='d-flex align-items-center'>
                    <div className='mr-4'>
                        <img className='work && work[0]ect-fit-cover rounded-circle h-20' src={avatar} alt="" />
                    </div>
                    <div className='mr-2'>
                        {tenNguoiTao}
                    </div>
                    <div className='text-warning mr-2'>Top rate seller</div>
                    <div className='d-inline-flex '>
                       <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                       <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                       <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                       <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                       <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                    </div>
                    {/* <div className='ml-1'>{work && work[0].congViec.saoCongViec}</div> */}
                    <div className='ml-1'>5</div>
                    {/* <div className='ml-2'>({work && work[0].congViec.danhGia})</div> */}
                    <div className='ml-2'>(316)</div>
                </div>

                <hr />

                <div className='d-flex align-items-center'>
                    <img className='work && work[0]ect-fit-cover h-20' src="https://st3.depositphotos.com/2140915/14563/v/450/depositphotos_145631667-stock-illustration-champions-cup-chromed-soccer-trophy.jpg" alt="" />
                    <p className='ml-2'><span className='font-bold'>Buyer keep returning!</span> {tenNguoiTao} has an exceptional number of repeat buyers.</p>
                </div>
                <div className='mt-3'>
                    {/* <img className='w-full' src={work && work[0].congViec.hinhAnh} alt="" /> */}
                    <img className='w-full' src={career.hinhAnh} alt="" />
                </div>
                 {windowSize.width <=768 && (price())}
                <div className='mt-5'>
                    <h3>About this glg</h3>
                    <p className='font-bold'>Top rated seller with all positive reviews</p>
                </div>
                <div>
                    {/* {work && work[0].congViec.moTa} */}
                    {career.moTa}
                </div>
                <div className='mt-2'>
                    <p className='font-bold'>I will do the work until you are satisfied with fast and responsive communication</p>
                </div>

                <hr />

                <div className='mt-4'>
                    <h3>About the seller</h3>
                    <div className='mt-3 d-flex'>
                        <div className='justify-content-start'>
                            <label className='w-40 work && work[0]ect-contain'>
                                <img src={avatar} alt="" />
                            </label>
                        </div>
                        <div className='align-items-start flex-column pl-3 text-xl'>
                            <h3 >{tenNguoiTao}</h3>
                            <p className='mb-2'>Less is More</p>
                             <div>
                                <div className='d-inline-flex '>
                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                </div>
                                {/* <b className='ml-1 text-yellow-500'>{work && work[0].congViec.saoCongViec}</b> */}
                                <b className='ml-1 text-yellow-500'>{4}</b>
                                {/* <span className='ml-1'>({work && work[0].congViec.danhGia})</span> */}
                                <span className='ml-1'>(316)</span>
                             </div>
                             <button className='btn btn-success mt-2'>Contact me</button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 rating'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            {/* <h4>{work && work[0].congViec.danhGia} Reviews</h4> */}
                            <h4>316 Reviews</h4>
                            <div className='d-inline-flex pt-2 ml-2'>
                                <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                            </div>
                            {/* <b className='ml-1 pt-1 text-yellow-500'>{work && work[0].congViec.saoCongViec}</b> */}
                              <b className='ml-1 pt-1 text-yellow-500'>4</b>
                        </div>
                        <div>
                            <p>sort by</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-12-xs col-6-sm w-3/5">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>
                                                <button className='text-xl text-yellow-500'>5 Stars</button>
                                            </span>
                                        </td>
                                        <td className='w-full py-1 px-1 pt-0 pl-6 mx-auto'>
                                            <div className="d-flex align-items-center">
                                            <div className="bg-gray-100 h-3 flex-1 relative rounded-full thanh">
                                                <span className='bg-yellow-500 h-full left-0 absolute z-10 rounded-full' style={{ width: '85%' }}></span>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='ml-2'>(200)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <button className='text-xl text-yellow-500'>4 Stars</button>
                                            </span>
                                        </td>
                                        <td className='w-full py-1 px-1 pt-0 pl-6 mx-auto'>
                                            <div className="d-flex align-items-center">
                                            <div className="bg-gray-100 h-3 relative flex-1 rounded-full thanh">
                                                <span className='bg-yellow-500 h-full left-0 absolute z-10 rounded-full' style={{ width: '10%' }}></span>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='ml-2'>(34)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <button className='text-xl text-yellow-500'>3 Stars</button>
                                            </span>
                                        </td>
                                        <td className='w-full py-1 px-1 pt-0 pl-6 mx-auto'>
                                            <div className="d-flex align-items-center">
                                            <div className="bg-gray-100 h-3 relative flex-1 rounded-full thanh">
                                                <span className='bg-yellow-500 h-full left-0 absolute z-10 rounded-full' style={{ width: '3%' }}></span>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='ml-2'>(9)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <button className='text-xl text-yellow-500'>2 Stars</button>
                                            </span>
                                        </td>
                                       <td className='w-full py-1 px-1 pt-0 pl-6 mx-auto'>
                                            <div className="d-flex align-items-center">
                                            <div className="bg-gray-100 h-3 relative flex-1 rounded-full thanh">
                                                <span className='bg-yellow-500 h-full left-0 absolute z-10 rounded-full' style={{ width: '1%' }}></span>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='ml-2'>(2)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <button className='text-xl text-yellow-500'>1 Stars</button>
                                            </span>
                                        </td>
                                       <td className='w-full py-1 px-1 pt-0 pl-6 mx-auto'>
                                            <div className="d-flex align-items-center">
                                            <div className="bg-gray-100 h-3 relative flex-1 rounded-full thanh">
                                                <span className='bg-yellow-500 h-full left-0 absolute z-10 rounded-full' style={{ width: '0%' }}></span>
                                            </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='ml-2'>(0)</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-2/5 ml-5">
                            <div className='border-t-0 mt-0'>
                                <h5 className='pl-8'>Rating Breakdown</h5>
                                <ul className='mt-1'>
                                    <li className='d-flex justify-content-between text-xl mt-3'>
                                        Seller communication level
                                        <span className='ml-1'>
                                            <div className='d-flex align-items-center'>
                                                 <div className='d-inline-flex pb-2'>
                                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                 </div>
                                                 <b className='pb-2'>4.5</b>
                                            </div>
                                        </span>
                                    </li>
                                    <li className='d-flex justify-content-between text-xl mt-3'>
                                        Recommend to a friend
                                        <span className='ml-1'>
                                            <div className='d-flex align-items-center'>
                                                 <div className='d-inline-flex pb-2'>
                                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                 </div>
                                                 <b className='pb-2'>4.5</b>
                                            </div>
                                        </span>
                                    </li>
                                    <li className='d-flex justify-content-between text-xl mt-3'>
                                        Service as describe
                                        <span className='ml-1'>
                                            <div className='d-flex align-items-center'>
                                                 <div className='d-inline-flex pb-2'>
                                                    <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                 </div>
                                                 <b className='pb-2'>4.5</b>
                                            </div>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <ul>
                                {comment.map((item)=>{
                            return  <span>
                                    <li className='border-t border-solid border-gray-300 pt-8 pb-8'>
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <div className='d-flex mr-3'>
                                                    <label className='text-base relative'>
                                                        <img className='h-16 rounded-full block z-9' src={item.avatar} alt="" />
                                                    </label>
                                                </div>
                                                <div className='d-flex flex flex-col'>
                                                    <div className='d-flex'>
                                                        <div className='mr-3 d-flex flex flex-wrap'>
                                                            <span className='leading-6'>
                                                                <b>{item.tenNguoiBinhLuan}  |  {item.ngayBinhLuan}</b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <div className="d-inline-flex align-items-center">
                                                            <img className='h-10 mt-n3' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                                            <div className='pl-2'>United States</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-[5.5rem]">
                                            <div className="d-flex flex flex-row">
                                                <div className='d-flex align-items-center'>
                                                    <div className='d-inline-flex'>
                                                        <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                        <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                        <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                        <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                        <span style={{width: 15, height: 15}} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" fill="#FFD700" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                    </div>
                                                    <b className='text-yellow-500 ml-2'>{item.saoBinhLuan}</b>
                                                </div>
                                            </div>
                                            <div className='mb-0 mt-3'>
                                                <p>
                                                   {item.noiDung}
                                                </p>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='leading-6'>Helpful?</div>
                                                <div className='ml-2 pt-1'>
                                                    <span onClick={handleColor}><AiFillLike color={color}/></span>
                                                </div>
                                                <div className="ml-2 pt-1">
                                                    <span onClick={handleColor1}><AiFillDislike color={color1}/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </span>
                                })}
                            </ul>
                        </div>
                    </div>
                    { isAuth? (<div className='comment'>
                         <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="comment"
             {...register("noiDung")}
          />
        </div>

        
        <button className="btn btn-success" onClick={handleButtonClick}>Comment</button>
      </form>
                    </div>) : (<p>Vui lòng đăng nhập để comment</p>)}
                </div>
            </div>
            {windowSize.width > 768 && (price())}
        </div>
    </div>
  )
}

export default DetailWork