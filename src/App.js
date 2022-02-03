import Menu from './Menu.jsx';
import Title from './Title.jsx';
import './output.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>IN$0MN1A</title>
        <meta charSet="utf-8" />
        <meta name="description" content="INSOMNIA is music, events and culture. To enter our world, join our parties. Find more info on our main socials." />
      </Helmet>
      <div className='absolute top-0 left-0 bg-black h-screen w-screen'>
          <Title />
          <Menu />
      </div>
    </>
  );
}

export default App;
