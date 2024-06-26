import './output.css';

function Title() {

    return (
        <>
            <div className='overflow-hidden absolute left-3 xl:left-9 text-center z-10'>
                <p className='xl:mt-10 mt-2 xl:ml-0 ml-0.3 text-xs xl:text-base tracking-wider xl:tracking-wider'>
                    <img src="macina-logo.png" className='w-9 inline mr-3 mb-0.9' />
                    LA MACINA SONORA
                </p>
            </div>
            <div className="absolute left-6 xl:left-10 bottom-5 xl:bottom-10 space-x-8 xl:space-x-14 z-10 text-base xl:text-xl text-black">
                <a target="_blank" href="https://www.facebook.com/lamacinasonora"><i class="bi bi-facebook"></i></a>
                <a target="_blank" href="https://www.instagram.com/lamacinasonora"><i class="bi bi-instagram"></i></a>
                <a href="https://open.spotify.com/playlist/01VYfz1UmZU2NvCkFlhDKj?si=UD2WqwY1RFuRoII2MHdrDA"><i class="bi bi-spotify"></i></a>
            </div>
        </>
    );
}

export default Title;