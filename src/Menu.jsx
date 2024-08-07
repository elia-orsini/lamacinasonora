import { useState } from "react";
import './output.css';
import { Transition } from '@headlessui/react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Menu() {
  const [show, setShow] = useState(false);
  const [productions, setProductions] = useState(false);
  const [thestudio, setStudio] = useState(false);
  const [recordings, setRecordings] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [soundSystem, setSoundSystem] = useState(false);
  const [events, setEvents] = useState(false);

  return (
    <div>

      <Transition
        show={show}
        enter="transition-opacity duration-[900ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-10 tracking-widerleading-2 top-32 xl:top-0 right-5 max-w-full text-lg xl:text-3xl text-right font-semibold">

          <Transition show={!productions && !thestudio && !recordings && !contacts && !soundSystem} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <p className="absolute mb-20 right-20 w-48 text-4xl top-10 text-left">
              <button className="absolute text-left left-0 mt-1 hover:underline" onClick={() => setStudio(!thestudio)}>the studio</button><br />
              <button className="text-left mt-3.5 hover:underline" onClick={() => setRecordings(!recordings)}>recordings</button><br />
              <button className="text-left mt-3 hover:underline" onClick={() => setProductions(!productions)}>productions</button><br />
              <button className="text-left mt-3 hover:underline" onClick={() => setSoundSystem(!soundSystem)}>soundsystem</button><br />
              <button className="text-left mt-3 hover:underline" onClick={() => setEvents(!events)}>events</button><br />
              <button className="text-left mt-3 hover:underline" onClick={() => setContacts(!contacts)}>contacts</button><br />
            </p>
          </Transition>

          <Transition show={contacts} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[33rem] z-0 max-h-screen text-2xl">
              <div className="absolute mt-0 xl:mt-10 right-0 font-semibold pl-10 xl:pl-0 w-screen xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black mb-7 text-3xl text-right">contacts</p>
                <p>
                  email:  <a className="font-black" href="mailto:lamacinasonora@gmail.com">lamacinasonora@gmail.com</a><br />
                  instagram:  <a className="font-black" href="https://www.instagram.com/lamacinasonora">@lamacinasonora</a><br />
                  facebook:  <a className="font-black" href="https://www.facebook.com/lamacinasonora">@lamacinasonora</a><br />
                </p>
                <p className="italic mt-20 mb-60 text-[0.7rem] leading-tight">
                  Copyright © 2024 La Macina Sonora. All rights reserved.<br />
                  Designed by Elia Orsini and Rino Bellandi.
                </p>
                <button className="fixed -bottom-10 xl:-bottom-14 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setContacts(!contacts)}>go back</button><br />
              </div>
            </div>
          </Transition>

          <Transition show={productions} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[50rem] z-0 max-h-screen text-2xl">
              <div className="absolute scrollable xl:opacity-100 opacity-0 pb-40 overflow-scroll h-screen top-0 mr-10 text-center font-semibold  space-y-2 w-[17rem] text-justify text-lg">
                <img className="w-11/12 mx-auto" src="./imgs/14.jpeg" /><p className="text-center py-1 font-base text-xs">Andrea Butturini - Polaroid</p>
              </div>
              <div className="absolute mt-0 xl:mt-10 right-0 font-semibold pl-10 xl:pl-0 w-screen xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black mb-7 text-3xl text-right">productions</p>
                <p className="mb-40">
                  Il team audio della "La Macina Sonora" è composto da diversi producer e musicisti.<br /> Le produzioni dello studio si sono da sempre contraddistinte per un suono moderno, dettagliato e sempre in grado di soddisfare i gusti degli artisti.
                  In particolare, grazie ai progetti musicali di Rino Bellandi, il suono della Macina si è specializzato sopratutto nelle produzioni elettroniche e Hip-Hop. <br />
                </p>
                <button className="fixed -bottom-10 xl:-bottom-14 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setProductions(!productions)}>go back</button><br />
              </div>
            </div>
          </Transition>

          <Transition show={thestudio} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[51rem] z-0 max-h-screen text-2xl">
              <div className="absolute scrollable pb-40 overflow-scroll opacity-0 xl:opacity-100 h-screen top-0 mr-10 font-semibold space-y-2 w-[18rem] text-justify text-lg">
                <img className="mt-2 w-11/12 mx-auto" src="./imgs/10-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/16-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/17-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/18-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/4-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/15-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/14-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/5-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/6-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/7-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/9-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/1-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/3-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/11-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/12-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/13-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/2-min.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/new3.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/new1.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/new2.jpg" />
              </div>
              <div className="absolute mt-0 xl:mt-10 bg-white right-0 font-semibold w-screen pl-10 xl:pl-0 xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black text-3xl mb-7 text-right">the studio</p>
                <p className="mb-28">
                  "La Macina Sonora" nasce dall'idea di Rino Bellandi di realizzare uno studio di registrazione e produzione musicale in grado di unire l'arte della registrazione tradizionale con le moderne tecniche di produzione audio.
                  Lo studio è situato a Montichiari, in provincia di Brescia ed è stato inaugurato nel gennaio 2020.
                  Nel corso degli anni i progetti della Macina Sonora sono diventati un riferimento sia per la qualità delle registrazioni che per la varietà creativa delle produzioni realizzate all'interno dello studio da producer e musicisti.
                  Oltre ad essere un luogo dove la musica trova il modo di esprimersi la Macina è da sempre un aggregatore di talenti e content creator, infatti il network che gravita intorno a questa realtà è arricchito da grafici, fotografi, videomaker e creativi i quali lavorano costantemente per gli artisti che scelgono lo studio
                  come casa della propria arte.
                </p>
                <button className="fixed xl:-bottom-14 -bottom-12 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setStudio(!thestudio)}>go back</button><br />
              </div>
            </div>
          </Transition>

          <Transition show={recordings} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[50rem] z-0 max-h-screen text-2xl">
              <div className="absolute scrollable xl:opacity-100 opacity-0 pb-40 overflow-scroll h-screen top-0 mr-10 text-center font-semibold  space-y-2 w-[17rem] text-justify text-lg">
                <img className="w-11/12 mx-auto" src="./imgs/2.jpeg" /><p className="text-center pb-0 font-base text-[0.65rem]">The Spotlights - thiswillmakeafunstoryoneday</p>
                <img className="mt-2 w-11/12 mx-auto" src="./imgs/1.jpeg" /><p className="text-center py-1 font-base text-xs">Jolly Kid & Flameengo - Playboy Carti</p>
                <img className="w-11/12 mx-auto" src="./imgs/3.jpeg" /><p className="text-center py-1 font-base text-xs">Wout Records Vol. III</p>
                <img className="w-11/12 mx-auto" src="./imgs/4.jpeg" /><p className="text-center py-1 font-base text-xs">Osso - PCASDM</p>
                <img className="w-11/12 mx-auto" src="./imgs/7.jpeg" /><p className="text-center py-1 font-base text-xs">Villy Flare - Cuore di Ghiaccio</p>
                <img className="w-11/12 mx-auto" src="./imgs/10.jpeg" /><p className="text-center py-1 font-base text-xs">Kalpa - Four Kids (Rino Bellandi Remix)</p>
                <img className="w-11/12 mx-auto" src="./imgs/9.jpeg" /><p className="text-center py-1 font-base text-xs">Jolly Kid - Morire x Me</p>
                <img className="w-11/12 mx-auto" src="./imgs/6.jpeg" /><p className="text-center py-1 font-base text-xs">Rino Bellandi - Movimento</p>
                <img className="w-11/12 mx-auto" src="./imgs/11.jpeg" /><p className="text-center py-1 font-base text-xs">Villy Flare - Villy sulla Luna Vol. 3</p>
                <img className="w-11/12 mx-auto" src="./imgs/12.jpeg" /><p className="text-center py-1 font-base text-xs">Bueno & Michele_Battart - Fuoco</p>
                <img className="w-11/12 mx-auto" src="./imgs/13.jpeg" /><p className="text-center py-1 font-base text-xs">Cenere - Sirene</p>
                <img className="w-11/12 mx-auto" src="./imgs/15.jpeg" /><p className="text-center py-1 font-base text-xs">Bueno - Paradiso</p>
              </div>
              <div className="absolute scrollable pb-40 overflow-scroll h-screen right-0 font-semibold pl-10 bg-white xl:pl-0 w-screen xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black mb-7 text-3xl mr-4 mt-5 text-right">recordings</p>
                <p className="mr-4 mb-32">
                  "La Macina Sonora" è divisa in due stanze, ideate e realizzate con due diversi approcci.
                  Entrambe sono state progettate e trattate acusticamente da Riccardo Buccelleni, ingegnere specializzato nell'acustica degli ambienti che ha curato nei minimi dettagli il suono e l'estetica delle due stanze per poter realizzare al meglio ogni idea artistica.
                  <br /><br /><span className="font-black">Control Room</span>: è il luogo dello studio pensato per la produzione musicale, il mixing ed il mastering dei brani che vengono affidati ai nostri producer e audio engineer. Questa stanza è la più moderna dello studio ed è stata isolata e trattata acusticamente per poter ascoltare nel modo più preciso e analitico possibile.
                  <br /><br /><span className="font-black">Live Room</span>: è il luogo dello studio pensato per la registrazione e l'esibizione dei musicisti. Il trattamento acustico di questa parte è stato pensato appositamente per ottenere sia registrazioni spot molto precise ed asciutte sia registrazioni panoramiche in grado di dare allo strumento ripreso il tipico suono di uno studio di qualità.
                  La Live Room è attrezzata anche per provare le esibizioni degli artisti fornendo impianto audio con mixer, batteria, amplificatori per basso e chitarra elettrica, microfoni per ogni esigenza ed un reparto di sintesi sonora sempre in espansione con tastiere e sintetizzatori.<br />
                </p>
                <button className="fixed -bottom-10 xl:-bottom-14 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setRecordings(!recordings)}>go back</button><br />
              </div>
            </div>
          </Transition>

          <Transition show={events} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[50rem] z-0 max-h-screen text-2xl">
              <div className="absolute scrollable pb-40 overflow-scroll h-screen right-0 font-semibold pl-10 bg-white xl:pl-0 w-screen xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black mb-7 text-3xl mr-4 mt-5 text-right">events</p>
                <p className="mr-4 mb-32">
                  La Macina Eventi è la divisione Live dello studio di registrazione e produzione La Macina Sonora.<br />
                  L'agenzia nasce dall'idea di raccogliere diverse figure professionali del settore dell'intrattenimento in grado di curare a 360° l'organizzazione di un evento pubblico e/o privato.<br />
                  Grazie all'esperienza maturata negli anni in diversi contesti il nostro team ha sviluppato una visione chiara degli aspetti artistici, tecnici e organizzativi necessari alla creazione di un evento di successo. La nostra mission è offrire un servizio completo e personalizzato al quale il cliente possa far riferimento come garanzia di qualità.
                </p>
                <button className="fixed -bottom-10 xl:-bottom-14 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setEvents(!events)}>go back</button><br />
              </div>
            </div>
          </Transition>

          <Transition show={soundSystem} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="absolute right-0 xl:right-10 w-[51rem] z-0 max-h-screen text-2xl">
              <div className="absolute scrollable pb-40 overflow-scroll opacity-0 xl:opacity-100 h-screen top-0 mr-10 font-semibold space-y-2 w-[18rem] text-justify text-lg">
                {/* <img className="mt-2 w-11/12 mx-auto" src="./imgs/10-min.jpg" /> */}
                <img className="w-11/12 mx-auto" src="./imgs/1S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/6S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/2S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/3S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/4S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/5S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/7S.jpg" />
                <img className="w-11/12 mx-auto" src="./imgs/8S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/9S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/10S.jpeg" />
                <img className="w-11/12 mx-auto" src="./imgs/13S.JPG" />
                <img className="w-11/12 mx-auto" src="./imgs/11S.JPG" />
                <img className="w-11/12 mx-auto" src="./imgs/12S.JPG" />
              </div>
              <div className="absolute mt-0 xl:mt-10 bg-white right-0 font-semibold w-screen pl-10 xl:pl-0 xl:w-[33rem] md:w-[30em] text-justify text-lg">
                <p className="font-black text-3xl mb-7 text-right">
                  soundsystem
                </p>
                <p className="mb-20">
                  La Macina Sonora Soundsystem nasce dall'idea di portare il suono del nostro studio anche nel mondo Live affiancando gli artisti e i professionisti che hanno scelto di affidarsi al nostro team per la propria musica.<br /> Abbiamo costituito il nostro impianto prevalentemente di speaker RCF per concerti Live di band e musicisti mentre abbiamo diversi impianti FBT e Proel per DJ Set ed eventi elettronici.<br /> Il nostro parco microfoni per le esibizioni dal vivo è ampio e può soddisfare le esigenze sia di piccole formazioni che di concerti per migliaia di persone. <br />Per qualsiasi informazione sui nostri servizi o per chiedere un preventivo personalizzato non esitare a contattarci.
                </p>
                <br />
                <button className="fixed xl:-bottom-14 -bottom-12 px-2 ml-2 rounded-xl border text-white border-1 border-white py-1 bg-black font-semibold text-lg mt-5 mr-2 mb-28 hover:bg-white hover:text-black transition-colors hover:border-black duration-500" onClick={() => setSoundSystem(!soundSystem)}>go back</button><br />
              </div>
            </div>
          </Transition>

        </div>
      </Transition>


      {
        show ?
          <img className='absolute z-0 transition ease-in-out transform duration-2000 top-0 opacity-0 md:opacity-100 left-1/2 -translate-x-full mx-auto mt-40 md:mt-0 xl:min-h-screen max-h-screen' src="macina-3d.gif" />
          :
          <img className='absolute z-0 transition ease-in-out transform duration-2000 top-0 left-1/2 -translate-x-1/2 mx-auto xl:min-h-screen mt-40 md:mt-0 max-h-screen' src="macina-3d.gif" />
      }

      {
        show ?
          <button className="rotate-[270deg] fixed bottom-16 z-10 xl:bottom-12 right-6 xl:right-14 bg-black rounded-full font-semibold text-white border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-black flex max-w-xl hover:bg-white hover:text-black hover:border-black transition-colors duration-500" onClick={() => setShow(!show)}>
            <svg className="transition-transform ease-in-out -rotate-90 duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
          </button>
          :
          <button className="rotate-[270deg] fixed bottom-16 z-10 xl:bottom-12 right-6 xl:right-14 bg-white rounded-full text-black text-center border px-2 h-12 xl:h-16 w-12 xl:w-16 p-0 border-black flex hover:bg-black hover:text-white hover:border-white transition-colors duration-500" onClick={() => setShow(!show)}>
            <svg className="transition-transform ease-in-out duration-2000" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" width="100%" height="100%">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
          </button>
      }

    </div>
  );
}
