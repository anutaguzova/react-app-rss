export function Card({ card }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__front">
          <div className="card-image">
            <img src={card.flag} alt={card.country} />
          </div>
          <h3>{card.country}</h3>
          <p>Capital: {card.capital}</p>
        </div>
        <div className="card-content__back">
          <img className="card-photo" src={card.img} alt={card.country} />
          <a href={card.map} target="_blank" rel="noreferrer">
            <img className="card-map" src="./public/icons/map.svg" alt="map" />
          </a>
          <div className="card-icons">
            <div className="card-icons__like">
              <img src="./public/icons/like.svg" alt="like" />
              <div>{card.like}</div>
            </div>
            <div className="card-icons__eye">
              <img src="./public/icons/eye.svg" alt="eye" />
              <div>{card.eye}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
