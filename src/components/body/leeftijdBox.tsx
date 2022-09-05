import React from "react";

type Props = {
  name: string;
  img: string;
};

const LeeftijdBox: React.FC<Props> = ({ name, img }: Props) => {
  return (
    <div className="leeftijdBox">
      <div className="leeftijdBoxInner">
        <div className="leeftijdBoxFront">
          <img src={img}/>
        </div>
        <div className="leeftijdBoxback">
            <ul>
              <li>
                <p>joke - <a href="/">tel: 115160464</a></p>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default LeeftijdBox;
