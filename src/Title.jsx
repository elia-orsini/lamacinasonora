import './output.css';

function Title() {

    return (
        <div className='overflow-hidden absolute left-2 xl:left-10 text-center z-10'>
            <img className="block mt-5 xl:mt-10 h-8 xl:h-11 xl:w-50" src="insomnia-logo-min.png" />
            <img className="xl:ml-1 ml-0.5 mt-1 block mt-1 h-7 xl:h-9 xl:w-52" src="symbols-bar.jpg" />
            <img className="xl:ml-[0.5rem] ml-1.5 mt-2 block mt-2 w-36 xl:w-[12.5rem]" src="bar.png" />
            <p className='xl:mt-2 mt-2 xl:ml-[0.1rem] ml-0.3 text-xs xl:text-[0.94rem] text-white tracking-wider xl:tracking-widest'>Music | Events | Culture</p>
        </div>
    );
}

export default Title;