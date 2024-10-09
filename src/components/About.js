import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Ruby Rubeeka. I am a Frontend developer. I built beautiful Websites with HTML , CSS , Java script , React.js , Tailwind CSS',
        line2: 'I am proficient in Frontend skills like HTML , CSS , Java script , React.js, Tailwind CSS and many more.',
        
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                
            </div>
        </div>
    </section>
}