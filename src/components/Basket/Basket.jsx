import React from "react";
import { Link } from "react-router-dom";

function Basket({ basket, setBasketActive }) {
  return (
    <div className="basket-wrapper">
      <div className="basket-content">
        <h1>Basket</h1>
        <div className="basket-list">
          <div className="basket-item-container">
            {basket && basket.orders && basket.orders.length > 0 ? (
              <>
                <h2>List Name: {basket.title}</h2> 
                <div className="basket-item-list">
                  {basket.orders.map((item, index) => (
                    <div key={index} className="basket-item">
                      <Link
                        target="_blank"
                        to={`https://www.themoviedb.org/movie/${item.id}`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                          alt={item.title || "Movie poster"} 
                        />
                      </Link>
                      <div className="basket-item-info">
                        <p className="movie-title">{item.title}</p>
                        <span className="movie-year">
                          Year: {item.release_date ? item.release_date.slice(0, 4) : "N/A"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="basket-empty-message">There are no items in your basket</div>
            )}
          </div>
        </div>
        <button onClick={() => setBasketActive(false)} className="back-button">Go Back</button>
      </div>
    </div>
  );
}

export default Basket;
