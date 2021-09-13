import { FC, Suspense } from 'react';
import Dashboard from './pages/Dashboard';

const App: FC = () => (
  <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  </div>
);

export default App;
