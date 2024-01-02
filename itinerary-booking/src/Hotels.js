import React, { useState } from 'react'

function Hotels() {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const fetchHotels = () => {
        setIsDivVisible(!isDivVisible);
    }
  return (
    <div>
      <div className="container">
        <div className="place">
          <span>From: </span>
          <input style={{ margin: "10px" }} type="text" />
          <span>To: </span>
          <input type="text" />
        </div>
        <div className="from">
          <span>Departure: </span>
          <input style={{ margin: "15px" }} type="date" />
          <span>Arrival: </span>
          <input type="date" />
        </div>
        <div className="search">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={fetchHotels}
          >
            Search
          </button>
        </div>
        <div className="result">
        {isDivVisible && (
          <div className="item" style={{}}>
            <strong><center>Work In Progress</center></strong>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Hotels