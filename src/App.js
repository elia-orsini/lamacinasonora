import Menu from './Menu.jsx';
import Title from './Title.jsx';
import './output.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>La Macina Sonora</title>
        <meta charSet="utf-8" />
        <meta name="description" content="La Macina Sonora. Studio di registrazione audio" />

        <meta property="og:title" content="La Macina Sonora" />
        <meta property="og:description" content="Macina Sonora descrizione" />
        <meta property="og:image" content="/macina-logo.png" />
        <meta name="og:site_name" content="La Macina Sonora" />
        <meta property='twitter:title' content="La Macina Sonora" />
        <meta property='twitter:image' content="/macina-logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>   

        <meta name="description" content="La Macina Sonora: studio di registrazione, produzione, servizi di Mixing e Mastering, service audio e network artistico per realizzare musica, contenuti multimediali ed eventi." />
        <meta name="keywords" content="Brescia, music studio, recording, sala di registrazione, studio musicale, Montichiari, musica, Rino Bellandi" />
        <meta name="author" content="Rino Bellandi" />
      </Helmet>
      <div className='absolute top-0 left-0 bg-white h-screen w-screen'>
          <Title />
          <Menu />
      </div>
    </>
  );
}

export default App;
