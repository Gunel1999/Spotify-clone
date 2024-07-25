import React, { useEffect, useRef, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { PlayerContext } from '../context/PlayerContext';

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId =
    isAlbum && albumsData.length > 0 ? location.pathname.split('/').pop() : '';
  const bgColor = isAlbum
    ? albumsData.find(item => item._id === albumId).bgColor
    : '#121212';

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 bg-[#121212] rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route
            path="/album/:id"
            element={
              <DisplayAlbum
                album={albumsData.find(item => item._id == albumId)}
              />
            }
          />
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
