import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from './data';

function ProjectCard({ project }) {
  return (
    <div className="rounded-lg shadow-md bg-white p-6 mx-4" style={{ height: 'fit-content' }}>
      <img
        src={project.thumbnail}
        alt={project.name}
        className=" h-64 object-cover rounded-lg mb-4 mx-auto"
        style={{ height: '200px' }} // Adjust the height as needed
      />
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-xl text-gray-700 mb-4">{project.desc}</p>
      <div className="flex justify-between items-center">
        <button className="bg-default hover:bg-white hover:text-default hover:border-2 hover:border-black text-white px-4 py-2 rounded-md mr-2" onClick={() => window.open(project.demo, '_blank')}>
          Demo
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md" onClick={() => window.open(project.github, '_blank')}>
          GitHub
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold mb-1">Skills:</p>
        <div className="flex flex-wrap">
          {project.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2 mb-2">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:<button type="button" class="slick-next" className='bg-default'>Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (

    <div className="w-full bg-gray-100 p-8 rounded-[80px] sm:rounded-[100px] pb-16 sm:pb-24">
      <h2 className="text-4xl font-bold text-center mt-4 sm:mt-8 mb-12 sm:mb-16">Projects</h2>
      <Slider {...settings} className='md:w-3/4 mx-auto'>
        {projects.map((project, index) => (
          <div key={index} style={{ height: 'fit-content' }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
