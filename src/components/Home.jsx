import {HiArrowCircleRight} from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
    return (
    <>  
        <div name='home' className="my-10 hover:scale-105 duration-300 bg-[#fef5e7] font-['nishikiteki'] max-w-[800px] max-w-[sm:500px] mx-auto rounded-lg shadow-lg p-8">
            <p className="text-[#7a6148] text-2xl">您好，我是</p>
            <h1 className="text-[#59524a] text-4xl sm:text-7xl py-2">陳湧惠</h1>
            <h2 className="text-[#8c8072] text-4xl sm:text-6xl">銘傳大學 資訊工程系</h2>
            <p className="text-[#a29382] text-xl py-4 max-w-[700px]">
                今年應屆畢業，
                未來想朝軟體業發展，
                平常喜歡閱讀和研究股票。
            </p>
            <div>
                <Link to="work" offset={-80} smooth={true} duration={500}>
                    <button className="ripple-bg-orange-100 hover:scale-105 duration-300 text-lg text-[#7a6148] bg-[#ede2d3] border-[#8c8072] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fecc99] hover:border-[#3b2f23] hover:text-[#3b2f23]">
                        查看作品
                        <span className="group-hover:-rotate-45 duration-300">
                            <HiArrowCircleRight size={25} />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Home
//#faefdf