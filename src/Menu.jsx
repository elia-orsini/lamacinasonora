import { useState } from "react";
import './output.css';
import { Transition } from '@headlessui/react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Menu() {
  const [show, setShow] = useState(false);


  return (
    <div>

      <Transition
        show={show}
        enter="transition-opacity duration-3500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-10 tracking-widerleading-2 top-32 xl:top-10 right-7 max-w-full text-lg xl:text-3xl text-right font-semibold text-white">
          <p>
            <a target="_blank" className="hover:underline underline-offset-2" href="https://www.facebook.com/InsomniaPageOfficial/photos/?ref=page_internal">photos</a> <br />
            <a target="_blank" className="hover:underline underline-offset-2" href="https://fb.watch/8f-8HncXZD/">aftermovie</a> <br /><br />
            <span className="font-light tracking-wide">
              IN$0MN1A nasce come un modo per <br />esprimersi artisticamente attraverso eventi e <br />progetti musicali.
              Il suono di IN$0MN1A è <br />basato sull’Hip-Hop, la Trap e la Bass Music <br />con una curatissima selezione musicale.<br />
              La nostra comunicazione cerca di unire due scene,<br /> quella hip-hop (più colorata e
              appariscente) e <br />quella elettronica (più minimale e misteriosa), <br />utilizzando grafiche scure
              ma accattivanti <br />e rivisitando l’arte classica con la modernità <br />dell’estetica informatica.
            </span>
          </p> 
        </div>
        <div className="absolute z-10 bottom-24 tracking-widest leading-6 right-48 max-w-full text-sm text-right font-thin text-white">
          <p className="text-white text-left mt-32 mr-96">
            return &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp; const <span className="font-extrabold">sounds</span> = [ <br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:font-semibold" href="https://instagram.com/lucafontana.mp3">lucafontana</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:font-semibold" href="https://instagram.com/alessio.dali">dali</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:font-semibold" href="https://instagram.com/rbxy71">xy71</a><br /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:font-semibold" href="https://instagram.com/alberto_comini">como</a><br /> 
            &nbsp;&nbsp;&nbsp;&nbsp; ] <br /> 
            &#125; 
          </p> 
        </div>
      </Transition>

      {
      show ? 
          <video className='absolute z-0 transition ease-in-out transform duration-2000 top-0 opacity-0 xl:opacity-100 left-1/2 -translate-x-full mx-auto min-h-screen max-h-screen' src={'bot.mp4'} autoplay="true" loop="true" playsinline="true" muted="true"/>
        : 
          <video className='absolute z-0 transition ease-in-out transform duration-2000 top-0 left-1/2 -translate-x-1/2 mx-auto min-h-screen max-h-screen' src={'bot.mp4'} autoplay="true" loop="true" playsinline="true" muted="true"/>
      }

      {
      show ? 
        <button className="absolute bottom-16 xl:bottom-12 right-6 xl:right-14 bg-black rounded-full font-semibold text-white border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-white flex max-w-xl hover:bg-white hover:text-black hover:border-black transition-colors duration-500" onClick={() => setShow(!show)}>
          <svg className="transition-transform ease-in-out rotate-180 duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </button>
        : 
        <button className="absolute bottom-16 xl:bottom-12 right-6 xl:right-14 bg-black rounded-full text-white text-center border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-white flex hover:bg-white hover:text-black hover:border-black transition-colors duration-500" onClick={() => setShow(!show)}>
          <svg className="transition-transform ease-in-out duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
        </button>
      }     

    </div>
  );
}

export default Menu;
