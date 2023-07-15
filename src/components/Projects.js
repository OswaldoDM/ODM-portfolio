import CT from './../assets/CryptoToday.png';
import IN from './../assets/Influencer1.png';
import Space from './../assets/Space.png';
import MG from './../assets/MG.png';
import MGC from './../assets/MGC.png';
import SunRose from './../assets/SunRose.png';
import chuckApp from './../assets/chuckApp.png';
import scm from './../assets/scm.png';
import journal from './../assets/journalApp.png';
import material from './../assets/material.png';

import { FaReact} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { SiReactrouter} from "react-icons/si";
import { SiFirebase} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


export function Projects({open,handleClick}) {

return(

<>
<section id='projects' className={`bg-white ${open && 'blur'}`}>

    <div className="container mx-auto px-12 mb-20">

        <h2 className= 
            {`mb-12 mt-10 md:mt-14 lg:mt-0 text-center lg:text-left 
            text-[42px] font-extrabold            
            `}>
                Projects
        </h2>
    
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-x-10 gap-y-10 sm:gap-14 lg:gap-x-14 lg:gap-y-20 xl:gap-y-24">

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/Influencer/' target='_blank'>
                    <img
                        src={IN}
                        alt="Saas"
                        loading="lazy"
                        className=
                        {`mb-2 rounded-lg w-[276px] cursor-pointer 
                        transition duration-300
                        border border-primary-gray 
                        hover:border-sec-gray
                        `}             
                    />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Influencer</h3>

                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        SaaS Landing Page created with Figma and 
                        then translated into high quality code.
                        
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center "
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>          

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/space-x-2023/' target='_blank'>
                <img
                    src={Space}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>SpaceX</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Single Page App where you can check all the SpaceX launches 
                        including articles and video recordings.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>                

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/react-cryptoToday/' target='_blank'>
                <img
                    src={CT}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Crypto Today</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        This App provides you with all the info you need 
                        about the cryptocurrency markets.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://scottwilsonmedia.co.uk/' target='_blank'>
                <img
                    src={scm}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Scott Wilson Media</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Full website for event hosting services
                        made with the Divi website builder in Wordpress.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-fuchsia-500 text-xl flex items-center"
                    >   
                        <CgWebsite />
                    </p>

                    <p className='font-mono text-xs mr-2'>Divi</p>                 

                </div>

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/react-mightyGifs/' target='_blank'>
                <img
                    src={MG}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Mighty Gifs</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        SPA created to help you finding any kind of gif you want. 
                        It was made by using the gyphy developers API.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-cyan-500 text-xl flex items-center"
                    >   
                        <SiTailwindcss />
                    </p>

                    <p className='font-mono text-xs mr-2'>Tailwind</p>                 

                </div>

            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://www.militarygamingcommand.org/' target='_blank'>
                <img
                    src={MGC}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Military Gaming</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        A beautiful landing page for military veterans
                        made with the Divi website builder in Wordpress.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-fuchsia-500 text-xl flex items-center"
                    >   
                        <CgWebsite />
                    </p>

                    <p className='font-mono text-xs mr-2'>Divi</p>                 

                </div>

            </div> 
                   
            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://sunroseart.com/' target='_blank'>
                <img
                    src={SunRose}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Sun Rose</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                        Full Art Website that works as a portfolio
                         created with the Elementor page builder in Wordpress
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-gray-400 text-xl flex items-center ">
                        <FaWordpress />
                    </p>

                    <p className='font-mono text-xs mr-2'>Wordpress</p>

                    <p className = "text-[#92003ac0] text-xl flex items-center"
                    >   
                        <FaElementor />
                    </p>

                    <p className='font-mono text-xs mr-2'>Elementor</p>                 

                </div>
               

            </div> 

            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/chuck-jokes-app/' target='_blank'>
                <img
                    src={chuckApp}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Chuck Jokes</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                    Web app with some of the best jokes ever written😆
                    thanks to the Chuck Norris jokes API.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>

                    <p className = "text-red-500 text-xl flex items-center "
                    >   
                        <SiReactrouter />
                    </p>

                    <p className='font-mono text-xs mr-2'>Router</p>

                    <p className = "text-blue-700 text-xl flex items-center "
                    >   
                        <FaCss3Alt />
                    </p>

                    <p className='font-mono text-xs mr-2'>CSS</p>            

                </div>

            </div>        
            <div className='flex flex-col items-center lg:items-start'>
                <a href='https://oswaldodm.github.io/journal-app' target='_blank'>
                <img
                    src={journal}
                    alt="Saas"
                    loading="lazy"
                    className=
                    {`mb-2 rounded-lg w-[276px] cursor-pointer 
                    transition duration-300
                    border border-primary-gray 
                    hover:border-sec-gray
                    `}             
                />
                </a>

                <h3 className='font-semibold text-2xl mb-2'>Journal App</h3>
                <p className=
                {`text-gray-800 text-sm text-center lg:text-left
                mb-2 lg:pr-5 2xl:pr-20 mq
                
                `}>
                    CRUD app that allows you to create a user and keep track of your daily tasks.
                </p>

                <div className='flex gap-1 justify-center lg:justify-start items-center w-full'>

                    <p className = "text-sky-400 text-xl flex items-center ">
                        <FaReact />
                    </p>

                    <p className='font-mono text-xs mr-2'>React</p>                


                    <div className = "text-blue-700 text-xl flex items-center "
                    >   
                        <img src={material} className='w-[20px] h-[20px]' />
                    </div>

                    <p className='font-mono text-xs mr-2'>Material</p> 


                    <p className = "text-orange-300 text-[18px] flex items-center ">
                        <SiFirebase />
                    </p>

                    <p className='font-mono text-xs mr-2'>Firebase</p>               
                                

                </div>

            </div>        

        </div>

    </div>

</section>       
</>

)
}