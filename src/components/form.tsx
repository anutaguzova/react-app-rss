import { useState, useEffect } from 'react';

export interface State {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  agree: boolean;
  gender: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  agree?: boolean;
  gender: string;
}

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [country, setCountry] = useState<string>('Choose country...');
  const [agree, setAgree] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('');
  const [errors, setErrors] = useState({} as Errors);

  const isGenderSelected = (value: string): boolean => gender === value;

  useEffect(() => {
    const validate = () => {
      setErrors({}); // сбрасываем ошибки
      if (!agree) {
        setErrors((state) => ({ ...state, agree }));
      }
      if (!firstName.match(/^([a-zA-Z ]){2,20}$/)) {
        setErrors((state) => ({ ...state, firstName }));
      }
      if (!firstName.match(/^([a-zA-Z ]){2,20}$/)) {
        setErrors((state) => ({ ...state, lastName }));
      }
      if (
        birthDate === '' ||
        birthDate >
          new Date().toLocaleDateString().split('/').reverse().join('-')
      ) {
        setErrors((state) => ({ ...state, birthDate }));
      }
      if (gender === '') {
        setErrors((state) => ({ ...state, gender }));
      }
      if (country === 'Choose country...') {
        setErrors((state) => ({ ...state, country }));
      }
    };
    validate();
  }, [firstName, lastName, birthDate, agree, country, gender]);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setGender('');
    setCountry('Choose country...');
    setAgree(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: []) => [
        ...state,
        {
          firstName,
          lastName,
          birthDate,
          country,
          agree,
          gender,
        },
      ]);
      alert('data saved succesfully');
      reset();
    }
  };

  return (
    <div className="app-form">
      <h2>Register Today</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="item" htmlFor="firstName">
            <p>
              Name:
              {!firstName.match(/^([a-zA-Z ]){2,20}$/) && (
                <span className="errors">
                  * Your name should contain only letters(up to 20 chars)
                </span>
              )}
            </p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </label>
          <label className="item" htmlFor="lastName">
            <p>
              Surname:
              {!lastName.match(/^([a-zA-Z ]){2,20}$/) && (
                <span className="errors">
                  * Your surname should contain only letters(up to 20 chars)
                </span>
              )}
            </p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </label>
          <label className="item" htmlFor="birthDate">
            <p>
              BirthDate:
              {birthDate >
                new Date()
                  .toLocaleDateString()
                  .split('/')
                  .reverse()
                  .join('-') && (
                <span className="errors">
                  * birth date should be fill correct
                </span>
              )}
              {errors?.birthDate === '' && (
                <span className="errors"> * birth date should be fill</span>
              )}
            </p>
            <input
              type="date"
              name="birthDate"
              value={birthDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBirthDate(e.target.value)
              }
            />
          </label>
          <label className="item" htmlFor="country">
            <p>
              Country:
              {errors?.country === 'Choose country...' && (
                <span className="errors"> * country should be choose</span>
              )}
            </p>
            <select
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onBlur={(e) => setCountry(e.target.value)}
            >
              <option value="Choose country...">Choose country...</option>
              <option value="belarus">Belarus</option>
              <option value="russia">Russia</option>
              <option value="poland">Poland</option>
              <option value="turkey">Turkey</option>
              <option value="germany">Germany</option>
            </select>
          </label>

          <label className="item">
            <p>
              Gender
              {errors?.gender === '' && (
                <span className="errors"> * gender should be choose</span>
              )}
            </p>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={isGenderSelected('Male')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGender(e.currentTarget.value)
              }
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={isGenderSelected('Female')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGender(e.currentTarget.value)
              }
            />
            Female
          </label>

          <label className="agree" htmlFor="agree">
            <div className="agree-container">
              <input
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={() => setAgree((prev: boolean) => !prev)}
              />
              <p>
                I agree...
                {errors?.agree !== undefined && (
                  <span className="errors"> * agree should be check</span>
                )}
              </p>
            </div>
          </label>
          <div className="button">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
