import { BrowserRouter } from 'react-router-dom';
import Approuter from './components/Approuter';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="App">
          <Approuter />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
