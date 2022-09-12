import React from "react";

type Props = {
  img: string;
  naam: string;
  nummer: string;
};

const Card: React.FC<Props> = ({ img, naam, nummer }: Props) => {
  return (
    <div className="card">
      <img src={img} alt="Avatar" />
      <div className="card-container">
        <h3>
          <b>{naam}</b>
        </h3>
        <p>
          tel:<a href={"tel:" + nummer}>{nummer}</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
