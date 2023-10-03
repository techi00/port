import React from 'react'
import Pro from "../assets/img.jpg";
import ProjectCard  from './projectCard';
function projectSection() {
  const projects = [
    {
      id:1,
      title:"project1",
      excerpt:"This is my project about....",
      imgUrl: "/",
    },
      {
          id:2,
      title:"project2",
      excerpt:"This is my project about....",
      imgUrl: "/",
    },
      {
          id:3,
      title:"project3",
      excerpt:"This is my project about....",
      imgUrl: "/",
    },
  ];
  
  return (
    <div className="container text-center my-5">
  <h1 className="font-weight-light">My <span className="text-info">Projects</span></h1> 
      <div className="Lead">I build products.Just like this website</div>     
      <div className='row my-5 pt-3'>
      {
          projects.map((project) => (
 <div key={project.id} className='col-12 col-md-4 my-2'> 
        <ProjectCard 
        title={project.title}
         excerpt={project.excerpt}
          imgUrl={project.imgUrl } />
 </div>
          )) }       
     
    </div>
      <div className='my-5'>
            <a href="/" className='text-dark text-right'>
              <h5>see my Projects 
                <i className='fas fa-arrow-right align-middlle'></i>

              </h5>
            </a>
          </div>
     </div>

  )
}
export default projectSection;