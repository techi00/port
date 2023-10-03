import React from 'react';
import Photo1 from "../assets/img.jpg";

 function tech() {
  const skills=[
  {
    id:"1",
    name:"HTML5",
    stackImg:"",
    starsTotal:"3",
    starActive:"2",
  },
  {
      id:"2",
    stackImg:"",
    star:"3",
    starCount:"3",
  },
    

]

  return (
   <div className="bg-light w-100">
  <div className="container-fluid text-center py-5">
    <h1 className="font-weight-light"><span className="text-info">Technology</span> stack</h1>
  <div className="lead pb-5">
I design,develop and deliver with these weapons
  </div>

    <div className="d-flex justify-content-around py-3 mx-5"></div>
  </div>
  </div>
  )
}
export default tech;