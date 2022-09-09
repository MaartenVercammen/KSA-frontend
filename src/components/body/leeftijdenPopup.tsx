import React from 'react'
import { JsxAttribute } from 'typescript';

type Props = {
    content: React.ReactNode;
    handleState: () => void;
}

const LeeftijdenPopup = ({content, handleState}: Props) => {

  return (
    <div className='modal'>
        <div className='modal-inner'>
            <button className='close' onClick={e => handleState}>X</button>
            {content}
        </div>
    </div>
  )
}

export default LeeftijdenPopup