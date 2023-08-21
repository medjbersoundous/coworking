import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsDribbble } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='flex w-full justify-between h-[400px]   pt-24 text-start' >
      <div className='w-[300px] pr-[50px] h-[200px] flex items-center'>
        <p className='font-light '>
          Men cannot not live by exchanging articles, but producing them. They live by work not trade.
        </p>
      </div>
      <div className='capitalize w-[200px] '>
        <h3 className='text-[#FD5B2F] mb-6'>company</h3>
        <div className='font-light'>
          <h4 className='mb-3'>globale localities</h4>
          <h4 className='mb-3'>missions</h4>
          <h4 className='mb-3'>careers</h4>
          <h4 className='mb-3'>investors</h4>
          <h4 className='mb-3'>newsroom</h4>
        </div>
      </div>
      <div className='capitalize w-[250px]'>
        <h3 className='text-[#FD5B2F] mb-6'>partnership</h3>
        <div className='font-light '>
          <h4 className='mb-3'>tasks</h4>
          <h4 className='mb-3'>profile</h4>
          <h4 className='mb-3'>events</h4>
          <h4 className='mb-3'>services</h4>
        </div>
      </div>
      <div className='text-[#FD5B2F] w-[380px] mb-6'>
        <h3 className='capitalize mb-7'>Follow us</h3>
        <div className='flex font-light '>
        <div className='mr-1 bg-white rounded-full w-8 h-8 flex justify-center items-center'>
           <FaFacebookF className='w-4 h-4' />
        </div>
        <div className='mr-1 bg-white rounded-full w-8 h-8 flex justify-center items-center'>
           <AiOutlineTwitter className='w-4 h-4' />
        </div>
        <div className='mr-1 bg-white rounded-full w-8 h-8 flex justify-center items-center'>
           <BsDribbble className='w-4 h-4' />
        </div>
        <div className='mr-1 bg-white rounded-full w-8 h-8 flex justify-center items-center'>
           <BiLogoLinkedin className='w-4 h-4' />
        </div>
        
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
