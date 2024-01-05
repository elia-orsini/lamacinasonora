import Menu from './Menu.jsx';
import Title from './Title.jsx';
import './output.css';

function App() {
  return (
    <>
      <div className='absolute top-0 left-0 bg-white h-screen w-screen'>
          <Title />
          <Menu />
      </div>
    </>
  );
}

export default App;
