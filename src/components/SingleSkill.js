import React from "react";

function    SingleSkill({data}) {
    console.log(data)
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-sm mx-auto" style={{ height: '500px', width: '500px', border: '1px solid #023538' }}>
    <div className="p-5">
      <div className="mb-3">
        <h2 className="text-2xl font-bold text-white text-center mb-3">{data.name}</h2>
        <div className="relative">
          <img
            className="transform transition duration-500 hover:rotate-6 hover:scale-105"
            src={data.thumbnail}
            alt={data.name}
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', maxHeight: '200px' }}
          />
        </div>
      </div>
      <p className="text-black text-opacity-80 text-sm text-center mb-4">
       {data.desc}
      </p>
      <div className="flex justify-center flex-wrap mb-4">
        {data.skills.map((skill, index) => (
          <span key={index} className="bg-white border-2 border-black text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={data.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-white border-2 border-black hover:bg-white hover:text-white hover:bg-default font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mr-2"
        >
          Demo
        </a>
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-khaliq-green-1000 hover:bg-white hover:text-default font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
  
  
  );
}

export default SingleSkill;
