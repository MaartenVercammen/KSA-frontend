import React from "react";

type Props = {
  name: string;
  img: string;
  startAge: string;
  endAge: string;
};

const LeeftijdBox: React.FC<Props> = ({ name, img, startAge, endAge }: Props) => {
  return (
    <div className="leeftijdBox">
      <img src={img}/>
      <div className="info">
        <h4>{name}</h4>
        <p>{startAge}-{endAge}</p>
      </div>
    </div>
  );
};

export default LeeftijdBox;
