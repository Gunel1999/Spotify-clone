import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/frontend-assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const [bgColor, setBgColor] = useState('#121212');

  useEffect(() => {
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : '';

    if (isAlbum && albumsData[Number(albumId)]) {
      setBgColor(albumsData[Number(albumId)].bgColor);
    } else {
      setBgColor('#121212');
    }
  }, [location]);

  useEffect(() => {
    displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
  }, [bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 bg-[#121212] rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
