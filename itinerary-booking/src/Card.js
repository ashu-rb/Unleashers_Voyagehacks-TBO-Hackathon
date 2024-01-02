import React, { useEffect, useState } from "react";
import "./Card.css";


function Card(props) {
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
//   const [newaDate, setNewADate] = useState("");
  const [arrDate, setArrDate] = useState("")
  const [arrTime, setArrTime] = useState("")
//   const [newaTime, setNewATime] = useState("");
  const convertDateTime = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);

    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();

    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return { formattedDate, formattedTime };
  };

  const dateTimeString = "2024-04-06T02:00:00";
  //   const { formattedDate, formattedTime } = convertDateTime(dateTimeString);
  useEffect(() => {
    const { formattedDate, formattedTime } = convertDateTime(
      props.details.Segments.Origin.DepTime
    );
    setNewDate(formattedDate);
    setNewTime(formattedTime);
    const { formattedADate, formattedATime } = convertDateTime(
      props.details.Segments.Destination.ArrTime
    );
    setArrDate(formattedADate);
    setArrTime(formattedATime);
  }, []);
  return (
    <>
      <div
        className="container text-center border border-dark border-5"
        id="oko"
      >
        <div className="row align-items-start">
          <div className="col border border-dark border-2">
            <h4>
              <strong>
                {props.details.Segments.Origin.Airport.AirportCode}
              </strong>
            </h4>
            {newDate} - {newTime}
          </div>
          <div className="col border border-dark border-2">
            <strong>Rs. {props.details.Fare.PublishedFare}</strong>
            <br />
            {props.details.Segments.Airline.AirlineCode}-{" "}
            {props.details.Segments.Airline.AirlineName}
          </div>
          <div className="col border border-dark border-2">
            <h4>
              <strong>
                {props.details.Segments.Destination.Airport.AirportCode}
              </strong>
            </h4>
            {arrDate} - {arrTime}
          </div>
          <div className="row align-items-center p-3">
            {props.details.AirportCode}
            <center>
              <button
                className="btn btn-dark"
                type="button"
                data-bs-toggle="modal"
              >
                Click here to book
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
