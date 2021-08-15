export function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="card-image">
            <img src={props.card.flag} alt={props.card.country} />
          </div>
          <h3>{props.card.country}</h3>
          <p>Capital: {props.card.capital}</p>
        </div>
        <div className="back">
          <img
            className="photo"
            src={props.card.img}
            alt={props.card.country}
          />
          <a href={props.card.map} target="_blank" rel="noreferrer">
            <img className="map" src="./icons/map.svg" alt="map" />
          </a>
          <div className="icons">
            <div className="like">
              <img src="./icons/like.svg" alt="like" />
              <div>{props.card.like}</div>
            </div>
            <div className="eye">
              <img src="./icons/eye.svg" alt="eye" />
              <div>{props.card.eye}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
