import React from "react";

function Navbar(){
  return(
 <nav className="navbar navbar-expand-sm fixed-top bg-white">
    <div className="container my-2">
      <a href="/" className="navbar-brand h1 text-dark font-weight-bold">Alex sanchez</a>
      <button type="button" className="btn btn-outline-info ml-auto font-weight-bold " name="button">contact me</button>

      <button type="button" name="button"
       className="navbar-toggler"
       data-toggle="collapse"
       data-target="#collapseNav" >

      <i className="fa-solid fa-bars"></i>
      </button>

<div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
  <div className="navbar-nav">
    <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto ">Projects</a>
  </div>
  <div className="navbar-nav">
    <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto ">Blogs</a>
  </div>
   
</div>

    </div>
  </nav>


  );
}
export default Navbar;