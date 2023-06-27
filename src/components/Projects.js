import CT from './../assets/CryptoToday.png';
import IN from './../assets/Influencer1.png';
import Space from './../assets/Space.png';
import MG from './../assets/MG.png';
import MGC from './../assets/MGC.png';
import SunRose from './../assets/SunRose.png';


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

                <div className='flex gap-1'>

                <a href="https://tailwindcss.com/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-cyan-600
                `}>
                    Tailwindcss
                </a>

                <a href="https://reactjs.org/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-primary-blue
                `}>
                    Reactjs
                </a>

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

                <div className='flex gap-1'>

                <a href="https://tailwindcss.com/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-cyan-600
                `}>
                    Tailwindcss
                </a>

                <a href="https://reactjs.org/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-primary-blue
                `}>
                    Reactjs
                </a>

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

                <div className='flex gap-1'>

                <a href="https://tailwindcss.com/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-cyan-600
                `}>
                    Tailwindcss
                </a>

                <a href="https://reactjs.org/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-primary-blue
                `}>
                    Reactjs
                </a>

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

                <div className='flex gap-1'>

                <a href="https://tailwindcss.com/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-cyan-600
                `}>
                    Tailwindcss
                </a>

                <a href="https://reactjs.org/" target='_blank' 
                className= 
                {`bg-teal-100 px-3 py-1 text-xs 
                rounded-full font-medium text-primary-blue
                `}>
                    Reactjs
                </a>

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
                        A beautiful landing page made with the Divi website builder in Wordpress.
                </p>

                <div className='flex gap-1'>

                <a href="https://wordpress.com/" target='_blank' 
                className= 
                {`bg-gray-300 px-3 py-1 text-xs  
                rounded-full font-medium text-gray-70000
                `}>
                    Wordpress
                </a>

                <a href="https://www.elegantthemes.com/gallery/divi/" target='_blank' 
                className= 
                {`bg-violet-400 px-3 py-1 text-xs 
                rounded-full font-medium text-white
                `}>
                    Divi
                </a>

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
                        Full Website created with the Elementor page builder in Wordpress
                </p>

                <div className='flex gap-1'>

                <a href="https://wordpress.com/" target='_blank' 
                className= 
                {`bg-gray-300 px-3 py-1 text-xs  
                rounded-full font-medium text-gray-70000
                `}>
                    Wordpress
                </a>

                <a href="https://elementor.com/" target='_blank' 
                className= 
                {`bg-[#92003ac0] px-3 py-1 text-xs 
                rounded-full font-medium text-white
                `}>
                    Elementor
                </a>

                </div>

            </div>        

        </div>

    </div>

</section>       
</>

)
}