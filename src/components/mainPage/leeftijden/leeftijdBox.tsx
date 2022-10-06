import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
  img: string;
  startAge: string;
  endAge: string;
};

function LeeftijdBox({
  name,
  img,
  startAge,
  endAge,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="leeftijdBox" onClick={() => navigate(`/leiders/${name}`)}>
      <img src={img} alt={`logo van de ${name}`} />
      <div className="info">
        <h4>{name}</h4>
        <p>
          {startAge}
          -
          {endAge}
        </p>
      </div>
    </div>
  );
}

export default LeeftijdBox;
