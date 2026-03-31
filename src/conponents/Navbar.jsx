import React from 'react';
import dollorImg from '../assets/dollar 1.png'

const Navbar = ({ coin }) => {
    return (
        <div>
             <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-2 font-bold text-xl">
        {coin} Coins
      <img src={dollorImg} alt="" />
      </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;