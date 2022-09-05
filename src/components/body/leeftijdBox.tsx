import React from 'react'

type Props = {
    name: string
}

const LeeftijdBox: React.FC<Props> = ({name}: Props) => {
  return (
    <div className='leeftijdBox'>
    <h2>{name}</h2>
    <ul>
        <li>Joke - 04856421525</li>
    </ul>
    </div>
  )
}

export default LeeftijdBox