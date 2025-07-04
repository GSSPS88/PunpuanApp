import React from 'react'
import { Link } from 'react-router-dom';
import HouseImage from "../../assets/Townhouse-and-Its-Advantages.jpg"
import Detail from './Detail'
import "./card.css"

const CardRow = ({ title, cardCount }) => {
  const cards = Array(cardCount).fill(0)

  return (
    <div className="card-row container">
      <h2 className="row-title">{title}</h2>
      <div className="card-wrapper">
        {cards.map((_, index) => (
          <div className="card" key={index}>
            <div className="card-image-wrapper">
              <img src={HouseImage} alt="house" className="card-image" />
              <div className="status">
                <p>Available</p>
              </div>
            </div>

            <div className="card-title">
              <h2>PunPuan House</h2>
            </div>

            <div className="detail">
              <Detail />
            </div>

            <div className="btn-wrapper">
                <Link to="/viewPage">
                  <button className="btn">More Detail</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="card-section">
      <CardRow title="In downtown" cardCount={6} />
      <CardRow title="Good price" cardCount={7} />
      <CardRow title="Recommended" cardCount={5} />
    </div>
  )
}

export default Card
