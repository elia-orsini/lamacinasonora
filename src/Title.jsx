import './output.css';

function Title() {

    return (
        <>
            <div className='overflow-hidden absolute left-2 xl:left-10 text-center z-10'>
                <img className="block mt-5 xl:mt-10 h-8 xl:h-11 xl:w-50" src="insomnia-logo-min.png" />
                <img className="xl:ml-1 ml-0.5 mt-1 block mt-1 h-7 xl:h-9 xl:w-52" src="symbols-bar.jpg" />
                <img className="xl:ml-[0.5rem] ml-1.5 mt-2 block mt-2 w-36 xl:w-[12.5rem]" src="bar.png" />
                <p className='xl:mt-2 mt-2 xl:ml-[0.1rem] ml-0.3 text-xs xl:text-[0.94rem] text-white tracking-wider xl:tracking-widest'>Music | Events | Culture</p>
            </div>
            <div className="absolute left-4 xl:left-16 bottom-5 xl:bottom-10 space-x-10 xl:space-x-[3.65rem] z-10 text-lg xl:text-xl text-white">
                <a target="_blank" href="https://facebook.com/InsomniaPageOfficial"><i class="bi bi-facebook"></i></a>
                <a target="_blank" href="https://instagram.com/insomnia.01"><i class="bi bi-instagram"></i></a>
                <a href="https://open.spotify.com/user/e1ex6sgsk9ocg117lon5jfx9n?si=QEVdTBm9QECsK6X7ORDcRQ"><i class="bi bi-spotify"></i></a>
            </div>
       </>
    );
}

export default Title;