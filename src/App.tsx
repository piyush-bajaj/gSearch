import { Routes } from './components/Routes';
import { useThemeContext } from './components/contexts/ThemeContextProvider';

function App() {
  const {darkTheme} = useThemeContext();

  return (
    <>
      <div className={darkTheme ? 'dark': ''} >
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>          
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;
