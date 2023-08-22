import React, { useState } from 'react'
import copy from "copy-to-clipboard";
import '../index.css';
import logo from '../assets/logo.png';
import copyicon from '../assets/copyicon.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsGithub, BsFillPersonFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import { Link } from 'react-scroll';
import resume from '../assets/履歷.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClickNav = () => setNav(!nav);

    const [showCopiedIcon, setShowCopiedIcon] = useState(false);
    const copyToClipboard = () => {
        copy('yonghuic20@gmail.com');
        setShowCopiedIcon(true);
        setTimeout(() => {
            setShowCopiedIcon(false);
          }, 1000); // 5000毫秒（1秒）後將showCopiedIcon設為false，已複製的圖片會消失
     }

  return (
    <>
        {/*導航欄整條*/}
        <div className='font-["nishikiteki"] bg-[#ede2d3] text-[#8c8072] w-full h-[80px] flex justify-between items-center px-4 z-20 sticky top-0'>
            {/*Logo*/}
            <img className='max-w-full w-[150px]' src={logo} alt="logo" />
            
            {/*navbar menu*/}
            <ul className='hidden md:flex text-xl'>
                <Link to="home" offset={-120} smooth={true} duration={500}>
                    <li className='py-7 hover:text-[#59524a] hover:bg-[#fef5e7]'>
                        首頁
                    </li>
                </Link>
                <Link to="about" offset={-80} smooth={true} duration={500}>
                    <li className='py-7 hover:text-[#59524a] hover:bg-[#fef5e7]'>
                        關於                    
                    </li>
                </Link>
                <Link to="skills" offset={-80} smooth={true} duration={500}>
                    <li className='py-7 hover:text-[#59524a] hover:bg-[#fef5e7]'>
                        技能
                    </li>
                </Link>
                <Link to="work" offset={-80} smooth={true} duration={500}>
                    <li className='py-7 hover:text-[#59524a] hover:bg-[#fef5e7]'>
                        作品
                    </li>
                </Link>
                <Link to="contact" offset={-80} smooth={true} duration={500}>
                    <li className='py-7 hover:text-[#59524a] hover:bg-[#fef5e7]'>
                        聯絡
                    </li>
                </Link>
            </ul>
         
            {/*打開 menu icon*/}
            <div onClick={handleClickNav} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/*適用小裝置 menu*/}
            <ul className={!nav ? 'hidden' : 'bg-[#ede2d3] absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='px-28 py-6 text-4xl hover:text-[#59524a] hover:bg-[#fef5e7]'>
                    <Link onClick={handleClickNav}  to="home" offset={-120} smooth={true} duration={500}>
                        首頁
                    </Link>
                </li>
                <li className='px-28 py-6 text-4xl hover:text-[#59524a] hover:bg-[#fef5e7]'>
                    <Link onClick={handleClickNav}  to="about" offset={-80} smooth={true} duration={500}>
                        關於
                    </Link>
                </li>
                <li className='px-28 py-6 text-4xl hover:text-[#59524a] hover:bg-[#fef5e7]'>
                    <Link onClick={handleClickNav}  to="skills" offset={-80} smooth={true} duration={500}>
                        技能
                    </Link>
                </li>
                <li className='px-28 py-6 text-4xl hover:text-[#59524a] hover:bg-[#fef5e7]'>
                    <Link onClick={handleClickNav}  to="work" offset={-80} smooth={true} duration={500}>
                        作品
                    </Link>
                </li>
                <li className='px-28 py-6 text-4xl hover:text-[#59524a] hover:bg-[#fef5e7]'>
                    <Link onClick={handleClickNav}  to="contact" offset={-80} smooth={true} duration={500}>
                        聯絡
                    </Link>
                </li>
            </ul>

            {/*Social icon*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-lg'>
                <ul>
                    <li className='bg-[#ede2d3] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='text-[#202020] flex justify-between items-center w-full' href="https://github.com/yonghuic" target="_blank" rel="noreferrer">
                            Github <BsGithub size={30} color="#3b2f23"/>
                        </a>
                    </li>
                     
                    <li className='bg-[#ede2d3] w-[235px] h-[60px] flex justify-between items-center ml-[-175px] hover:ml-[-10px] duration-300'>
                        <button onClick={copyToClipboard} className='text-sm text-[#202020] flex justify-between items-center w-full'>
                            yonghuic20@gmail.com
                            {/*按下按鈕後顯示已複製的圖片*/}
                            {showCopiedIcon && <img className='max-w-[34%] pb-14 -ml-20' src={copyicon} alt="copyicon" />}
                            <SiGmail size={30} color="#3b2f23"/>
                        </button>
                    </li>

                    <li className='bg-[#ede2d3] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='text-[#202020] flex justify-between items-center w-full' 
                            href={resume}
                            download="履歷"
                            target="_blank"
                            rel="noreferrer"
                        >
                            履歷<MdDownload className='mr-6' size={30} color="#3b2f23"/>
                            <BsFillPersonFill size={30} color="#3b2f23"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
/*<div id='logo' className="font-['Parisienne'] text-4xl">Yonghuic</div> */