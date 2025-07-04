import React, { useEffect, useRef, useState } from 'react';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(2500000);
  const [maxPrice, setMaxPrice] = useState(7500000);
  const priceGap = 1000000;
  const maxLimit = 10000000;

  const rangeMinRef = useRef();
  const rangeMaxRef = useRef();
  const progressRef = useRef();

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleMinInputChange = (e) => {
    let value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxInputChange = (e) => {
    let value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    if (value - minPrice >= priceGap && value <= maxLimit) {
      setMaxPrice(value);
    }
  };

  const handleRangeChange = (type, value) => {
    value = parseInt(value);
    if (type === 'min') {
      if (maxPrice - value >= priceGap) {
        setMinPrice(value);
      }
    } else {
      if (value - minPrice >= priceGap) {
        setMaxPrice(value);
      }
    }
  };

  useEffect(() => {
    const minPercent = (minPrice / maxLimit) * 100;
    const maxPercent = (maxPrice / maxLimit) * 100;
    if (progressRef.current) {
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="price-wrapper mt-4">
        <h2 className='title'>Price Range</h2>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <span className="currency-label">LAK</span>
          <input
            type="text"
            className="input-min"
            value={formatNumber(minPrice)}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Max</span>
          <span className="currency-label">LAK</span>
          <input
            type="text"
            className="input-max"
            value={formatNumber(maxPrice)}
            onChange={handleMaxInputChange}
          />
        </div>
      </div>
      <div className="slider">
        <div className="progress" ref={progressRef}></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max={maxLimit}
          step="1000"
          value={minPrice}
          onChange={(e) => handleRangeChange('min', e.target.value)}
          ref={rangeMinRef}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max={maxLimit}
          step="1000"
          value={maxPrice}
          onChange={(e) => handleRangeChange('max', e.target.value)}
          ref={rangeMaxRef}
        />
      </div>
    </div>
  );
};

export default PriceRange;
