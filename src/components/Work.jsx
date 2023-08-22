import burger from '../assets/workBurger.PNG';
import pmis from "../assets/workPMIS.PNG";
import rentdapp from "../assets/workRentdapp.PNG";

const Work = () => {
  return (
    <>
       <div name="work" className="font-['nishikiteki'] w-full bg-[#fef5e7] pb-8">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
                <p className="border-[#c1aa99] text-4xl border-b-4 inline border-c1aa99 text-[#70665b]">
                    作品
                </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
                {/* PMIS工程資訊管理系統 */}
                <div className="bg-[#fef9f0] max-w-sm mx-6 my-4 rounded-md overflow-hidden shadow-lg hover:scale-110 duration-500">
                    <img className="w-full" src={pmis} alt="pmis" />
                    <div className="pt-4 px-6">
                        <div className="text-3xl mb-2 text-[#70665b] text-center">PMIS工程資訊管理系統</div>
                    </div>
                    <div className="px-6 pb-4 flex justify-center">
                        <a href="https://youtu.be/7OgcdqYjI2E" target="_blank" rel="noopener noreferrer" className="block">
                            <button className="ripple-bg-amber-50 hover:scale-105 duration-300 text-lg text-[#7a6148] bg-[#ede2d3] border-[#8c8072] group border-2 my-2 flex items-center hover:bg-[#ffecd7] hover:border-[#3b2f23] hover:text-[#3b2f23] py-2 px-4 rounded mr-4">
                                影片
                            </button>
                        </a>   
                        <a href="https://yonghuic.github.io/pmis/" target="_blank" rel="noopener noreferrer" className="block">
                            <button className="ripple-bg-amber-50 hover:scale-105 duration-300 text-lg text-[#7a6148] bg-[#ede2d3] border-[#8c8072] group border-2 my-2 flex items-center hover:bg-[#ffecd7] hover:border-[#3b2f23] hover:text-[#3b2f23] py-2 px-4 rounded">
                                網站
                            </button>
                        </a>   
                    </div>
                </div>

                {/* burger shop */}
                <div className="bg-[#fef9f0] max-w-sm mx-6 my-4 rounded-md overflow-hidden shadow-lg hover:scale-110 duration-500">
                    <img className="w-full" src={burger} alt="burger" />
                    <div className="pt-4 px-6">
                        <div className="text-3xl mb-2 text-[#70665b] text-center">Burger Shop</div>
                    </div>
                    <div className="px-6 pb-4 flex justify-center">
                        <a href="https://youtu.be/5Zm2qziCvBY" target="_blank" rel="noopener noreferrer" className="block">
                            <button className="ripple-bg-amber-50 hover:scale-105 duration-300 text-lg text-[#7a6148] bg-[#ede2d3] border-[#8c8072] group border-2 my-2 flex items-center hover:bg-[#ffecd7] hover:border-[#3b2f23] hover:text-[#3b2f23] py-2 px-4 rounded mr-4">
                                影片
                            </button>
                        </a>   
                    </div>
                </div>

                {/* 畢業專題 */}
                <div className="bg-[#fef9f0] max-w-sm mx-6 my-4 rounded-md overflow-hidden shadow-lg hover:scale-110 duration-500">
                    <img className="w-full" src={rentdapp} alt="rentdapp" />
                    <div className="pt-4 px-6">
                        <div className="text-3xl mb-2 text-[#70665b] text-center">畢業專題 - IPFS與智能合約在租屋上的應用</div>
                    </div>
                    <div className="px-6 pb-4 flex justify-center">
                        <a href="https://youtu.be/KC_Hqr_Qvw8" target="_blank" rel="noopener noreferrer" className="block">
                            <button className="ripple-bg-amber-50 hover:scale-105 duration-300 text-lg text-[#7a6148] bg-[#ede2d3] border-[#8c8072] group border-2 my-2 flex items-center hover:bg-[#ffecd7] hover:border-[#3b2f23] hover:text-[#3b2f23] py-2 px-4 rounded mr-4">
                                影片
                            </button>
                        </a>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work
