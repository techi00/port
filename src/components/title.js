import React from "react";
import chinoy from "../assets/img.jpg";

function title(props){
  const{name,leadText}=props;
  // const name="Chinoy Techi";
  // const leadText="I am a freelance developer from India";
  return(
    <div className="container py-5">
    <div className="row text-center align-items-center my-5">
      <div className="col-12 col-md-6">
        <img src={chinoy} className="img-fluid rounded-circle w-75" alt=""/>

      </div>
      <div className="col-12 col-md-6 pt-5 ">
            <div className="font-weight-light" style={{fontSize:"50px"}}>
  Hi,I am <span className="text-info">{name}</span>

            </div>
              <h4 className="font-weight-light">{leadText}</h4>
      </div>

    </div>

  </div>
  );
}
export default title;