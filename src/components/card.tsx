import { State } from './form';

interface CardProps {
  Item: State
}

const Card: React.FC<CardProps> = ({ Item }) => (
  <div className="card">
    <div>
      <span>Name: </span>
      <span className="field">{Item.firstName}</span>
    </div>
    <div>
      <span>Surname: </span>
      <span className="field">{Item.lastName}</span>
    </div>
    <div>
      <span>Country: </span>
      <span className="field">{Item.country}</span>
    </div>
    <div>
      <span>Birthdate: </span>
      <span className="field">{Item.birthDate}</span>
    </div>
    <div>
      <span>Gender: </span>
      <span className="field">{Item.gender}</span>
    </div>
    <div>
      <span>Country: </span>
      <span className="field">{Item.country}</span>
    </div>
    <div>
      <span>Agree: </span>
      <span className="field">YES</span>
    </div>
  </div>
);

export default Card;
