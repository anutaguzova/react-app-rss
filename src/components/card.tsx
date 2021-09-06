export function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__front">
          <div className="card-image">
            <img src={props.card.flag} alt={props.card.country} />
          </div>
          <h3>{props.card.country}</h3>
          <p>Capital: {props.card.capital}</p>
        </div>
        <div className="card-content__back">
          <img
            className="card-photo"
            src={props.card.img}
            alt={props.card.country}
          />
          <a href={props.card.map} target="_blank" rel="noreferrer">
            <img className="card-map" src="./public/icons/map.svg" alt="map" />
          </a>
          <div className="card-icons">
            <div className="card-icons__like">
              <img src="./public/icons/like.svg" alt="like" />
              <div>{props.card.like}</div>
            </div>
            <div className="card-icons__eye">
              <img src="./public/icons/eye.svg" alt="eye" />
              <div>{props.card.eye}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
