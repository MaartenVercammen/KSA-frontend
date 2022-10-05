import React from "react";
import "./card.css";

type Props = {
  img: string;
  voornaam: string;
  achternaam: string;
  nummer: string;
};

const Card: React.FC<Props> = ({
  img,
  voornaam,
  achternaam,
  nummer,
}: Props) => {
  return (
    <div className="card">
      <img src={img} alt="Avatar" />
      <div className="card-container">
        <h3>
          <b>{voornaam}</b>
          <br />
          <b>{achternaam}</b>
        </h3>
        <p>
          tel:<a href={"tel:" + nummer}>{nummer}</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
