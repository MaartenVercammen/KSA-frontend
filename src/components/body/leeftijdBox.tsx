import React from "react";
import LeeftijdenPopup from "./leeftijdenPopup";
import { useState }  from 'react';

type Props = {
  name: string;
  img: string;
  startAge: string;
  endAge: string;
};

const LeeftijdBox: React.FC<Props> = ({ name, img, startAge, endAge }: Props) => {
  const [modal, setModal] = useState<boolean>(false)

  const handleModalSwitch = () => {
    if(modal){
      setModal(false);
    }
    else{
      setModal(true);
    }
  }

  return (
    <div className="leeftijdBox" onClick={e => handleModalSwitch()}>
      <img src={img}/>
      <div className="info">
        <h4>{name}</h4>
        <p>{startAge}-{endAge}</p>
      </div>
      {modal && <LeeftijdenPopup content={(<div>test</div>)} handleState={() => {handleModalSwitch()}}/>}
    </div>
  );
};

export default LeeftijdBox;
