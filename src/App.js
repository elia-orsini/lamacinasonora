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
      </Helmet>
      <div className='absolute top-0 left-0 bg-white h-screen w-screen'>
          <Title />
          <Menu />
      </div>
    </>
  );
}

export default App;
