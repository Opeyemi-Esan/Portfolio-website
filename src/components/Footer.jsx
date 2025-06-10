import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsThreads, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

export const Footer = () => {
  return (
    <div className='min-h-50 bg-gray-950 flex flex-col justify-center items-center gap-8 border-t border-t-white/10'>
        <div className='flex flex-row gap-8 justify-center items-center'> 
            <a href='https://www.facebook.com/share/18ntisYfzt/?mibextid=wwXIfr' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><FaFacebook /></a>
            <a href='https://www.instagram.com/_otanx?igsh=MWFpajRxOW9pMG05&utm_source=qr' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsInstagram /></a>
            <a href='https://www.threads.com/@_otanx?igshid=NTc4MTIwNjQ2YQ==' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsThreads /></a>
            <a href='https://www.linkedin.com/in/opeyemiesan/' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><LiaLinkedin /></a>
            <a href='https://x.com/Enop7156' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsTwitter /></a>
            <a href='https://wa.me/message/IDZMGVIN3CT3G1' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsWhatsapp /></a>
            <a href='https://github.com/Opeyemi-Esan' target='_blank' className='text-gray-400 text-lg cursor-pointer hover:text-blue-500/40 active:text-500/50'><BsGithub /></a>
        </div>

        <p className='text-gray-400'>&copy; 2025 Your Company Name. All rights reserved.</p>
    </div>
  )
}
