import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const handlecheck = ()=>{
    title = 'This is a Change Text'
    console.log(title);
  }

  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handlecheck}>Change Title</button>
  </React.Fragment>
};

export default ErrorExample;
