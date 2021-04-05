import React from 'react';
import Suma from '../../utils/suma'

const Sum = () => {
  const suma = new Suma(5).add(1).add(2).add(2);

  return (
    <div>{suma.value}</div>
  )
}

export default Sum;
