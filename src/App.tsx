import './styles.css'
import React from 'react'
import { Card } from './components/card'
import { Search } from './components/search'

export class App extends React.Component {
  state = {
    card: [
      {
        img: './country/South Africa.jpeg',
        country: 'Republic of South Africa',
        flag: './flag/South Africa.png',
        capital: 'Cape Town',
        map: 'https://goo.gl/maps/1QjcZwWwydhD88yT6',
        like: '123',
        eye: '321',
      },
      {
        img: './country/australia.jpeg',
        country: 'Australia',
        flag: './flag/Australia.jpeg',
        capital: 'Canberra',
        map: 'https://goo.gl/maps/DgphEqRGG7wqvFF3A',
        like: '24',
        eye: '32',
      },
      {
        img: './country/georgia.jpeg',
        country: 'Georgia',
        flag: './flag/georgia.png',
        capital: ' Tbilisi',
        map: 'https://goo.gl/maps/rCeM6WZj5yULMFvY7',
        like: '113',
        eye: '221',
      },
      {
        img: './country/Kenya.jpeg',
        country: 'Kenya',
        flag: './flag/Kenya.png',
        capital: 'Nairobi',
        map: 'https://goo.gl/maps/prT6TzUAWbX99HHM6',
        like: '215',
        eye: '521',
      },
      {
        img: './country/Switzerland.jpeg',
        country: 'Switzerland',
        flag: './flag/Switzerland.png',
        capital: 'Bern',
        map: 'https://goo.gl/maps/tGPHuhBJqxSvt7Jd8',
        like: '345',
        eye: '465',
      },
      {
        img: './country/Seychelles.jpeg',
        country: 'Seychelles',
        flag: './flag/Seychelles.png',
        capital: 'Victoria',
        map: 'https://goo.gl/maps/NdzzRRHbckNDCZ1j7',
        like: '278',
        eye: '590',
      },
      {
        img: './country/nepal.jpeg',
        country: 'Nepal',
        flag: './flag/nepal.png',
        capital: 'Kathmandu',
        map: 'https://goo.gl/maps/2nqME2DaiBYRj1TdA',
        like: '650',
        eye: '900',
      },
      {
        img: './country/Mauritius.jpeg',
        country: 'Mauritius',
        flag: './flag/Mauritius.png',
        capital: 'Port Louis',
        map: 'https://goo.gl/maps/abDoKFxqoc66ptWt5',
        like: '850',
        eye: '950',
      },
    ],
  }

  render() {
    return (
      <div className="wrapper">
        <Search />
        <div className="card-container">
          {this.state.card.map((card) => {
            return <Card card={card} key={card.country + Math.random()} />
          })}
        </div>
      </div>
    )
  }
}
