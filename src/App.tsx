import './styles.css';
import { useState } from 'react';
import Form, { State } from './components/form';
import Card from './components/card';

function App() {
  const [formValues, setFormValues] = useState<State[]>([]);
  return (
    <div className="apps">
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item: State) => (
          <Card Item={item} key={formValues.indexOf(item)} />
        ))}
      </main>
    </div>
  );
}

export default App;
