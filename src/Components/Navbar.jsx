import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-100vw bg-[#F1F5F9] flex items-center justify-between gap-[2rem]  px-[5vw] py-[1rem] border-t-4 border-b-4 border-zinc-400">
      <Link to="/" className="text-4xl font-bold">
      <i className="ri-home-3-line text-[#671C98]"></i>
      </Link>
      <Link to="/humse-miliye" className="text-3xl font-bold text-[#671C98]">
        हमसे मिलिये
      </Link>
      <Link to="/khbar-palika" className="text-3xl font-bold text-[#671C98]">
        खबर पालिका
      </Link>
      <Link to="/mantri-santri" className="text-3xl font-bold text-[#671C98]">
        मन्त्री संत्री
      </Link>
      <Link to="/yah-bhi-padhiye" className="text-3xl font-bold text-[#671C98]">
      यह भी पढिये
      </Link>
      <Link to="/court-kachahri" className="text-3xl font-bold text-[#671C98]">
        कोर्ट कचहरी
      </Link>
      <Link to="/anukarniya" className="text-3xl font-bold text-[#671C98]">
        अनुकर्णीय
      </Link>
      <Link to="/apna-mp" className="text-3xl font-bold text-[#671C98]">
        अपना MP
      </Link>
    </div>
  );
};

export default Navbar;
