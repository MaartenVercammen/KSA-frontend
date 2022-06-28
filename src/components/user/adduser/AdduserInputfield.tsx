import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    field: string;
    type: string;
    handler: (event: React.ChangeEvent) => void;
    name: string;
    input: string
}

const AddUserInputfield: React.FC<Props>= ({field, type, handler, name, input}: Props)=>{
return(
    <div className="form-group col">
            <label htmlFor={field} className="form-label">{name}</label>
            <input className="form-control" type={type} name={field} value={input} onChange={(event) => handler(event)}/>
    </div>
)
}


export default AddUserInputfield