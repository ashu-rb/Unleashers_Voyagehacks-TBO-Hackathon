import React, { useEffect, useState } from "react";
import "./Flights.css";
import data2 from "./sample.json";
import Card from "./Card.js";
import FlipMove from "react-flip-move";

function Flights() {
  const [postData, setPostData] = useState({
    EndUserIp: "202.173.125.107",
    TokenId: "8b34d721-5e40-4624-8fef-f98228dbeec0",
    AdultCount: "1",
    ChildCount: "0",
    InfantCount: "0",
    DirectFlight: "false",
    OneStopFlight: "false",
    JourneyType: "1",
    PreferredAirlines: null,
    Segments: [
      {
        Origin: "DEL",
        Destination: "BOM",
        FlightCabinClass: "1",
        PreferredDepartureTime: "2024-04-06T08: 00: 00",
        PreferredArrivalTime: "2024-04-09T00: 00: 00",
      },
    ],
    Sources: null,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const fetchFlights = () => {
    setIsDivVisible(!isDivVisible);
    // const tokenId = "8b34d721-5e40-4624-8fef-f98228dbeec0";
    // const timeoutId = setTimeout(() => {
    //   setLoading(false);
    //   console.log("Request timeout exceeded");
    // }, 30000);
    // try {
    //   const response = await fetch(
    //     "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(postData),
    //       mode: "no-cors",
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log("Data received:", data);
    // } catch (error) {
    //   console.error("Error making POST request:", error);
    // } finally {
    //   clearTimeout(timeoutId);
    //   setLoading(false);
    // }
  };
  useEffect(() => {
    setData(data2);
  }, []);
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
            onClick={fetchFlights}
          >
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {isDivVisible && (
          <div className="item" style={{}}>
            <FlipMove>
              {data2.Results.map((item) => (
                <Card key={item.id} details={item} />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flights;
