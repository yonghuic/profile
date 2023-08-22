import python from '../assets/python.png';
import ReactImg from '../assets/react.png';
import node from '../assets/node.png';
import MongoDB from '../assets/mongo.png';
import Tailwindcss from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import git from "../assets/git.png";
import bulma from '../assets/bulma.png';

const Skills = () => {
    const skillsImages = [
        {
            name:"Python",
            image:python,
            icon:"Python icon",
        },
        {
            name:"React",
            image:ReactImg,
            icon:"React icon",
        },
        {
            name:"MongoDB",
            image:MongoDB,
            icon:"MongoDB icon",
        },
        {
            name:"Node.js",
            image: node,
            icon:"node icon",
        },
        {
            name:"Git",
            image: git,
            icon:"git icon",
        },
        {
            name:"Tailwindcss",
            image: Tailwindcss,
            icon:"Tailwindcss icon",
        },
    ];  
  return (
    <div name='skills' className='font-["nishikiteki"] w-full bg-[#faefdf]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
            <div>
                <p className='text-[#70665b] text-4xl inline border-b-4 border-[#c1aa99]'>技能</p>
            </div>

            <div className='text-[#59524a] text-lg w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                {skillsImages.map((skillsImage, index) => {
                    return (
                        <div key={index} className='py-4 bg-[#fef5e7] shadow-lg rounded-md hover:scale-110 duration-500'>
                            <img className='max-w-[40%] object-cover mx-auto py-4' src={skillsImage.image} alt={skillsImage.icon} />
                            <p className='mx-auto'>{skillsImage.name}</p>
                        </div>
                    );
                })}
                <div className='py-4 bg-[#fef5e7] shadow-lg rounded-md hover:scale-110 duration-500'>
                    <img className='max-w-[45%] object-cover mx-auto py-4' src={bootstrap} alt="bootstrap icon"/>
                    <p className='mx-auto pt-5'>Bootstrap</p>
                </div>
                <div className='py-4 bg-[#fef5e7] shadow-lg rounded-md hover:scale-110 duration-500'>
                    <img className='max-w-[25%] object-cover mx-auto py-4' src={bulma} alt="bulma icon"/>
                    <p className='mx-auto pt-5'>Bulma</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
