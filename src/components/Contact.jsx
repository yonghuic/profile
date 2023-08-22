import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { BsFillSendFill, BsSendCheckFill, BsChatTextFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Contact = () => {
    const [inputs, setInputs] = useState({});
    const handleInputsChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const [sendIcon, setSendIcon] = useState(<BsFillSendFill size={20} />);
    const [sendText, setSendText] = useState("傳送");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t1taoh2', 'template_elp0fp8', e.target, '3Jt4vB1SkvheS2ggr')

        setSendIcon(<BsSendCheckFill size={20} />);
        setSendText("已傳送");
        setTimeout(() => {
            setSendIcon(<BsFillSendFill size={20} />);
            setSendText("傳送");
          }, 2000);
          
        setInputs({ from_name: "", from_email: "", message: "" });
    };
  return (
    <>
        <div name="contact" className="font-['nishikiteki'] w-full bg-[#faefdf] pb-8">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
                <p className="border-[#c1aa99] text-4xl border-b-4 inline border-c1aa99 text-[#70665b]">
                    聯絡
                </p>
            </div>

            <div className="flex items-center justify-center text-[#8c8072]">
                <form onSubmit={sendEmail}  className="min-w-[250px] px-8 py-6 m-4 block rounded-lg bg-[#fef5e7] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="mb-4 relative">
                        <label className="block text-base font-medium text-neutral-800 dark:text-neutral-50" htmlFor="input1">
                            您的姓名
                        </label>
                        <div className="relative flex items-center">
                            <FaUserCircle size={22} className="absolute left-3 text-neutral-500" />
                            <input
                            className="pl-10 w-full border border-[#c1aa99] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1aa99]"
                            type="text"
                            name="from_name"
                            value={inputs.from_name || ""}
                            onChange={handleInputsChange}
                            autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-base font-medium text-neutral-800 dark:text-neutral-50" htmlFor="input2">
                        您的信箱
                        </label>
                        <div className='relative flex items-center'>
                            <MdEmail size={22} className="absolute left-3 text-neutral-500" />
                            <input
                                className="pl-10 w-full border border-[#c1aa99] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1aa99]"
                                type="email"
                                name='from_email'
                                value={inputs.from_email || ""}
                                onChange={handleInputsChange}
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-base font-medium text-neutral-800 dark:text-neutral-50" htmlFor="textarea1">
                        信件內容
                        </label>
                        <div className='relative flex items-center'>
                            <BsChatTextFill size={22} className="absolute left-3 top-2 text-neutral-500" />
                            <textarea
                                className="pl-10 w-full border border-[#c1aa99] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c1aa99]"
                                name='message'
                                value={inputs.message || ""}
                                onChange={handleInputsChange}
                                autoComplete='off'
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="flex items-center focus:ring-2 focus:ring-[#807261] focus:ring-offset-2 bg-[#ede2d3] border-[#8c8072] border-2 hover:bg-[#ffecd7] text-[#7a6148] hover:border-[#3b2f23] hover:text-[#3b2f23] py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <sapn className="mr-2 text-lg">{sendText}</sapn>{sendIcon}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
