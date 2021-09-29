import './styles.css';
import { useState } from 'react';
import Form, { FormDate } from './components/form';
import Card from './components/card';

function App() {
  const [formValues, setFormValues] = useState<FormDate[]>([]);
  return (
    <div className="apps">
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item: FormDate) => (
          <Card Item={item} key={formValues.indexOf(item)} />
        ))}
      </main>
    </div>
  );
}

export default App;
