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
                    我是一個充滿創造力和好奇心的人，
                    對閱讀、股票研究有著濃厚的興趣，
                    這幫助我培養思考能力和保持對市場趨勢的敏感度，<br />
                    平時喜歡打羽毛球，這不僅有助於保持身體健康，還培養了我團隊合作的精神，<br />
                    在開發的過程中，我也具備解決問題的耐心以及對新技術保持開放的學習態度，讓我能在這個不停更迭的IT領域中持續成長。
                    <br />
                    <br />
                    Python:<br />進行股票資料的爬取與分析，這使我更深入理解了資料處理和分析的過程。<br /><br />
                    React:<br />我在畢業專題和作品集中使用此框架，來開發出具有吸引力和互動性的前端界面。<br /><br />
                    TailwindCSS、Bootstrap、Bulma：<br />我在畢業專題和作品集中使用過這些css框架，為專案增添風格設計與美感。<br /><br />
                    Node.js、MongoDB:<br />構建作品集中的登入/註冊功能，鍛煉了我在後端開發方面的技能。<br /><br />
                    Solidity:<br />畢業專題涉及區塊鏈領域，這使我對區塊鏈技術有了深入的了解，並使用該語言來撰寫智能合約。<br /><br />
                    Git基本指令:<br />幫助我有效地管理專案，在協作中至關重要。<br /><br />
                   
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