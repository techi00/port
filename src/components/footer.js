import React from "react";

function footer(){
  return(
<footer>
    <div className="container-fluid text-center" style={{backgroundColor:"black"}}>

        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
<button type="button" className="btn btn-outline-light my-3" name="button">Let's talk</button>
        </div>

      <div className="row text-center">
        <div className="col-12 col-md-4 py-3">

          <h5 className="text-info d-block">More Links</h5>
          <a href="#"className="text-light d-block">Blogs</a>
          <a href="#"className="text-light d-block">Home</a>
          <a href="#"className="text-light d-block">Contact me</a>
          <a href="#"className="text-light d-block">Write a recommendation</a>


        </div>
        <div className="col-12 col-md-4 py-3">
          <p className="text-light text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="col-12 col-md-4 py-3">
      <h5 className="text-info">Social</h5>
       <div className="d-flex text-center align-items-center ml-5" >
      <a href="/" style={{textDecoration:"none"}}><i className="fa-brands fa-github text-light h2 d-block mx-3"></i></a>
      <a href="/" style={{textDecoration:"none"}}><i className="fa-brands fa-linkedin text-light h2 d-block mx-3"></i></a>

      <a href="/"style={{textDecoration:"none"}} ><i className="fa-solid fa-envelope text-light h2 d-block mx-3"></i></a>
          <a href="/"style={{textDecoration:"none"}} ><i className="fa-solid fa-envelope text-light h2 d-block mx-3"></i></a>
      </div>
      
        </div>

      </div>
      <div className="text-muted py-3">
        <p>Copyright <i className="fa-regular fa-copyright"></i> Alex sanchez 2020</p>
      </div>


    </div>

</footer>

  );

}
export default footer;