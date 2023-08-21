import React from 'react'
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"
import lap from "../assets/lap.png"
import {AiOutlineWifi} from 'react-icons/ai'
import {BsCalendar2Event, BsSlack} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import {MdChair} from 'react-icons/md'
import {CiDumbbell, CiLocationOn} from 'react-icons/ci'
import chair from '../assets/chair.png'
import {PiBagBold} from 'react-icons/pi'
import local1 from '../assets/local1.png'
import local2 from '../assets/local2.png'
import local3 from '../assets/local3.png'
import local4 from '../assets/local4.png'
import coding from '../assets/coding.png'
import calender from '../assets/calender.png'
import {FaRegPlayCircle} from 'react-icons/fa'
import ring from '../assets/ring.png'
import wavy from '../assets/wavy.png'
import table from '../assets/table.png'
import working from '../assets/working.png'
import working2 from '../assets/working2.png'
import working3 from '../assets/working3.png'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpeg'
import chair2 from '../assets/chair2.png'
import ImageGallery from './ImageGallery'
import {LuBuilding2} from 'react-icons/lu'
import {GiArcheryTarget} from 'react-icons/gi'
import {DiAtlassian} from 'react-icons/di'
import {AiOutlineDropbox} from 'react-icons/ai'
import {FaShopify} from 'react-icons/fa'
const Main = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <>
     <main className='pt-[8%] '  >
      <section className='w-[1200px] mb-[280px] flex flex-col items-center ml-20 ' id='home' >
        <div className=' flex justify-between w-full'>
        <div className='w-[500px]  flex flex-col items-left justify-center mt-[-200px] '>
          <img src={wavy} alt="" className='w-32 ml-[-10px] mt-[180px]' />
          <h3 className='text-6xl font-semibold '>A new way to <br /> revolutionise <br /> your workspace  <br /> to yourself </h3>
          <div className='mt-[230px] flex items-center'>
          <div  className='flex mt-[-180px] ' >
         <ImageGallery images={images}  />
         <div className='bg-[rgb(5,196,196)] rounded-full w-8 h-8 text-center text-white ml-[-10px] border-2 border-white '> <span className='text-[13px] '>+10</span></div>
          </div>
            <span className='ml-4 mt-[-180px] text-xs'>16 people booked a visit in last 24 hours</span>
          </div>
          <div className='bg-[rgba(255,255,255,0.89)] flex items-center justify-between p-4 rounded-lg mt-[-220px] w-[750px] z-40 text-gray-500'>
            <div className='flex items-center '>
            <CiLocationOn className='text-2xl mr-3' /> <span>City</span>
            </div>
            <span>Location</span>
            <button className='bg-orange-600 text-white font-light p-3 w-[140px] rounded'>Schedule Visit </button>
          </div>
        </div>
        <div className='ml-[-100px]'>

        <div className=' w-[700px] ml-[100px] relative'>
        <div className='h-[520px] w-[360px] rounded-t-full border-solid border-2 border-violet-700  relative  mt-[80px] mr-[200px] border-b-white'></div>
        <div className='absolute z-30 mt-[-490px] ml-8'>

           <img src={table} alt="" className='rounded-t-[50%] h-[500px] w-[360px]' />
           <img src={working3} alt="" className='w-[180px] h-[180px] rounded-full z-10 mt-[-520px] ml-[250px] ' />
           <img src={working2} alt="" className='w-[55px] h-[55px] rounded-full mt-[-45px] ml-[450px]'/>
           <img src={working} alt="" className='w-[105px] h-[105px] rounded-full mt-[40px] ml-[360px]'/>
        </div>

        <div class="transform rotate-90 origin-center ml-[130px] mt-20 ">
          <p class="text-4xl capitalize font-bold text-[#3232321f] ">co working</p>
        </div>
        </div>
        </div>
        </div>
        <div className='flex text-xl text-gray-500 mr-[200px] font-bold mt-10 '>
          <span>Google</span>
          <span className='flex items-center ml-12'> <BsSlack /> Slack</span>
          <span className='flex items-center ml-12'> <DiAtlassian />Atlassian</span>
          <span className='flex items-center ml-12'> <AiOutlineDropbox /> Dropbox</span>
          <span className='flex items-center ml-12'> <FaShopify /> shopify</span>
        </div>
      </section>
      <section className='w-full flex mb-[300px] items-center ' id='about'>
        <div className='h-[300px] w-[460px] rounded-t-full border-solid border-2 border-orange-500 relative mt-[-320px] ml-2 border-b-white'></div>
        <div className='w-1/2 absolute  '>
          
          <img src={coding} alt="" className='rounded-t-[50%] h-[550px] w-[447px] ml-3' />
          <div className='ml-5 mt-[-30px]'>
            <img src={calender} alt="" className=' z-20 mt-[-120px] ml-[390px] rounded w-[90px]  '/>
             <img src={ring} alt="" className='rounded-[50%] mt-[-102px] ml-[370px] w-10' />
          </div>
          <div className='mt-10 flex justify-center mr-[200px] '>
            <div className='w-[10px] h-[10px] bg-orange-600 mt-[18%] mr-1 '></div>
            <div className='w-[10px] h-[10px] bg-slate-300 mt-[18%] mr-1 '></div>
            <div className='w-[10px] h-[10px] bg-slate-300 mt-[18%]  mr-1'></div>
          </div>
        </div>
        <div className='w-1/2 ml-[100px] '>
          <h4 className='uppercase text-orange-500 '>services</h4>
          <h3 className=' text-[40px] leading-relaxed '>Solutions designed for <br /> all your needs</h3>
          <p className=' leading-loose mb-10 font-light '>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.</p>
          <div className='flex font-light '>
            <button className='capitalize bg-orange-600 text-white  w-[170px] p-2 rounded mr-20'>view availability</button>
            <span className='text-orange-500 flex items-center' ><FaRegPlayCircle  className='text-4xl mr-5 '/> 3D Tour of Space </span>
          </div>
        </div>
      </section>
      <section className='w-full flex mb-[160px]' id='services'>
        <div className='w-700px mr-[200px]' >
          <div className=''>
          <h4 className='uppercase text-orange-400'>visions</h4>
          <h2 className='text-5xl leading-normal'>Our vision in 1-space to <br /> make something</h2>
          <p className='leading-loose mt-4 mb-9 '  >Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures services.</p>
          </div>
          <div className='flex'>
            <div>
              <div>

              <h3 className='font-light text-lg flex items-center '> <div className='bg-[rgba(247,247,104,0.817)] rounded-full p-[10px] mt-4 relative ml-[-7px] ' ></div> <  GiArcheryTarget className=' absolute text-2xl' /> <span className='ml-4'>High quality co-living spaces</span> </h3>
              <p className='font-extralight ml-6 '>Coworking is an arrangement in which workers of different companies</p>
              </div>
              <div>
              <h3 className='font-light text-lg flex items-center '> <div className='bg-[rgba(56,169,255,0.837)] rounded-full p-[10px] mt-4 relative ml-[-7px] ' ></div> <  PiBagBold className=' absolute text-2xl' /> <span className='ml-4'>Simple and inclusive</span> </h3>
              <p className='font-extralight ml-6 '>Coworking is an arrangement in which workers of different companies</p>
              </div>

            </div>
            <div className='ml-6'>
              <h3 className='font-light text-lg flex items-center '> <div className='bg-[rgba(163,242,216,0.856)] rounded-full p-[10px] mt-4 relative ml-[-7px] ' ></div> < LuBuilding2 className=' absolute text-2xl' /> <span className='ml-4'>Equipped for product</span> </h3>
              <p className='font-extralight ml-6 '>Coworking is an arrangement in which workers of different companies</p>
            </div>
         
          </div>
          <button className='bg-orange-600 w-[120px] text-white rounded p-2 capitalize mt-11 font-light' >explore more </button>
        </div>
        <div className='mr-7 mt-7'>
          <div className='w-[440px] bg-[#FFF9C5] rounded-tl-[200px] p-[140px] pb-[220px] mr-[100px]  '></div>
          <div >
            <img src={local3} alt="" className='w-[200px] h-[200px] z-10 mt-[-390px]  ml-[130px]' />
            <img src={local1} alt="" className='w-[300px] h-[280px] z-10 mt-[120px]  ml-[30px]' />
            <img src={local2} alt="" className='w-[200px] h-[200px] z-10 mt-[-400px]  ml-[330px]'/>
            <img src={local4} alt="" className='w-[110px] h-[90px] z-10 ml-[330px] mt-[-450px] '/>
          </div>
        </div>
      </section>
      <section className='w-full flex items-center mb-[150px] ' id='services'>
        <div className='w-1/2 mr-[5%] '>

        <h4 className='text-orange-500 uppercase'> solutions</h4>
        <h3 className='text-5xl font-light leading-snug'>The 1-space all view <br />experience technology</h3>
        <p className='w-[600px] mt-10 mb-24  leading-loose '>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.</p>
        <button className='capitalize bg-orange-600 text-white rounded w-[140px] p-2 font-extralight'>view availability</button>
        </div>
        <div className='w-1/2 flex overflow-hidden ml-10 '>
            <img src={chair} alt="" className='w-[1100px] h-[650px] mr-7' />
            <img src={chair2} alt="" className='w-[360px] h-[650px]' />
        </div>
      </section>
      <section className='flex w-full flex-col items-center text-center ml-[-6%] mb-[200px]' id='spaces'>
        <div className=' flex flex-col  '>
          <h5 className='uppercase text-orange-500 '>why choose us?</h5>
          <h3 className='text-5xl text-center mb-10 mt-3 font-light'>The benefits that will <br /> make you comfort </h3>
        </div>
        <div className='flex w-[1200px]' >
          <div className='flex flex-col items-center'>
            <BsCalendar2Event className='text-orange-500 text-5xl ' />
            <h4 className='mt-5 mb-5'>community events</h4>
            <p className='font-extralight'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </div>
          <div className='flex flex-col items-center ml-8'>
            <CiDumbbell  className='text-orange-500 text-5xl  '/> 
            <h4 className='mt-5 mb-5'>exercice facilities</h4>
            <p className='font-extralight'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </div>
          <div className='flex flex-col items-center ml-8'>
            <AiOutlineWifi className='text-orange-500 text-5xl '/>
            <h4 className='mt-5 mb-5'>high-speed wireless</h4>
            <p className='font-extralight'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </div>
          <div className='flex flex-col items-center ml-8'>
            <TfiWorld className='text-orange-500 text-5xl ' />
            <h4 className='mt-5 mb-5'>global availability</h4>
            <p className='font-extralight'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </div>
          <div className='flex flex-col items-center ml-8'>
            <MdChair className='text-orange-500 text-5xl '/>
            <h4 className='mt-5 mb-5'>comfort lounges</h4>
            <p className='font-extralight'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </div>
        </div>
      </section>
       <section className='flex w-full mb-[200px]   ' id='events'>
        <div className='flex flex-col w-[1200px] mt-10 '>
           <h5 className='text-orange-600 uppercase font-normal'>gallery</h5>
           <div className='w-[470px] text-[43px] mb-6 ' >
            <h3>Immersuve beautiful <br /> co-working space gallery</h3>
           </div>
           <div className=''>
            <div className='flex w-[650px] mb-4 '>
                <img src={work1} alt='work-image' className=' w-[550px] h-[210px] mr-5' />
                <img src={work2} alt='work-image' className='w-[650px] h-[210px]' />
            </div>
            <div className='flex w-[650px]'>
                <img src={work4} alt='work-image' className='w-[450px] h-[210px]' />
                <img src={work3} alt='work-image' className='w-[350px] h-[210px] ml-5' />
            </div>
           </div>
        </div>
        <div className=' w-[900px] flex ml-[-90px] '>
         <div>
            <img src={work5} alt="work-image"  className='w-[500px]  h-[650px] '/>
         </div>
        </div>
       </section>
       <section className='flex justify-between w-full mt-20'>
        <div className='w-1/2 pr-[120px]'>
          <h4 className='uppercase text-orange-500 '>become a member</h4>
          <h3 className='text-4xl mt-2 mb-6 font-light'>Ready to try different work environment now?</h3>
          <p className='font-light text-[15px]'>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.</p>
          <div className='mt-[14%]'>

          <button className='capitalize bg-orange-600 text-white rounded text-xs p-[14px] w-[130px]'>sign up now </button>
          <button className='text-orange-500 border-orange-600 border-[0.1px] ml-[30px] rounded bg-[rgba(255,255,255,0)]  text-xs p-[14px] w-[130px]'>Schedule Visit</button>
          </div>
        </div>
        <div className='w-1/2 mt-[-200px] '>
     
        <div className='h-[500px] w-[360px] rounded-t-full border-solid border-2 border-orange-500 relative  mt-[80px] mr-[200px] border-b-white'></div>
          <div className='absolute z-30  ' >
          <img src={lap} alt="lap-image" className=' rounded-t-[50%] w-[400px] h-[480px] ml-7 mt-[-480px]' />
          </div>
        </div>
       </section>
     </main>
    </>
  )
}

export default Main