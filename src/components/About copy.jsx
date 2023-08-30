import React from 'react';

const About = () => {
  return (
    <>
        <div name='about' className="font-['nishikiteki'] bg-[#fef5e7]">
            {/* 標題 */}
            <div className="text-center py-4 mt-8">
                <p className="border-[#c1aa99] text-4xl border-b-4 inline border-c1aa99 text-[#70665b]">
                關於
                </p>
            </div>

            <div className="text-[#8c8072] mt-8 md:mt-12">
                {/* 內文1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
                <div>
                    <p className="text-4xl mb-8">
                    您好，我是陳湧惠，
                    <br />
                    畢業於銘傳大學資訊工程系，
                    <br />
                    讓我向您介紹一下我自己。
                    </p>
                </div>

                {/* 內文2 */}
                <div>
                    <p className="text-lg mb-8">
                    我是一個充滿創造力和好奇心的人，對閱讀、股票研究有著濃厚的興趣。
                    <br />
                    <br />
                    我也經營著自己的YouTube頻道。將我所學的程式設計技術和股票知識相結合，製作成教學影片並分享給觀眾，
                    <br />
                    目前我的YouTube頻道已經有了1950名訂閱者，並且不斷增長，
                    主題涵蓋選股策略、財報分析、技術面K線圖、區塊鏈和Excel等。
                    <br />
                    <br />
                    期待能將我的創造力、好奇心和技術能力應用於實際的工作中，並與團隊共創成功。
                    如有任何進一步的問題，歡迎與我聯繫。
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;