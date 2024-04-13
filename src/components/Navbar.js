import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-default h-16 fixed top-0 w-full z-50">
      <div className="text-white font-bold">TheKhaliqAnsari</div>
      <ul className="flex gap-5">
        <li className="font-bold text-white"><a href="">Home</a></li>
        <li className="font-bold text-white"><a href="">Skills</a></li>
        <li className="font-bold text-white"><a href="">My Projects</a></li>
        <li className="font-bold text-white"><a href="">Github</a></li>
      </ul>
      <div className="absolute bottom-0 h-2 w-full bg-default rounded-t-full"></div>
    </nav>
  );
};

export default Navbar;
