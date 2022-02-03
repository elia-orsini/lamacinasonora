import './output.css';

function Title() {

    return (
        <div className='overflow-hidden absolute left-2 xl:left-10 text-center z-10'>
            <img className="block mt-5 xl:mt-10 h-8 xl:h-11 xl:w-50" src="insomnia-logo-min.png" />
            <img className="xl:ml-1 ml-0.5 mt-1 block mt-1 h-7 xl:h-9 xl:w-52" src="symbols-bar.jpg" />
            <img className="xl:ml-3 ml-1.5 mt-2 block mt-2 w-36 xl:w-48" src="bar.png" />
            <p className='xl:mt-1 mt-2 xl:ml-0 ml-0.3 text-xs xl:text-base text-white tracking-wider xl:tracking-wider'>Music | Events | Culture</p>
        </div>
    );
}

export default Title;