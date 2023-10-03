import React from 'react'

 function projectCard(props) {
  const{title,excerpt,imgUrl}=props;
  return (
    < div className='card shadow h-100'>
          <img className='card-img-top' 
            src={imgUrl} alt='project'  />
          <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{excerpt}</p>
            <a href="/" className='stretched-link' > </a>
          </div>
        
         </div>
         
  )
}
export default projectCard;