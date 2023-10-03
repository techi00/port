import React from 'react';

function techStack(props) {
  const{name,stackImg,starsTotal,starActive}=props.skills;
  return (
  
  <div>
  <img src={stackImg} style={{width:"200px",height:"200px"}} className="rounded-circle" alt={name} />
  <div className='text-center'>
    {/* <span className="text-info h1">*</span>
    <span className="text-info h1">*</span>
    <span className="text-info h1">*</span>
    <span className="h1">*</span> */}

  </div>
    </div>
   
   
  )
}
export default techStack;