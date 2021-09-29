import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Approuter from './components/Approuter';
import Navbar from './components/Navbar';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main>
          <div className="App">
            <Approuter />
          </div>
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
