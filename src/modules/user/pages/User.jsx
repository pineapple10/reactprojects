import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import usePreLoader from '../../../hooks/usePreloader';

export default function User() {
  const { preLoader } = usePreLoader();
  useEffect(() => {
    preLoader(500);
  });
  return (
    <div
      className="sm:py-40 py-40 min-h-screen flex justify-center items-center"
      style={{ backgroundImage: 'url("/assets/img/backapp.jpg")' }}
    >
      <Outlet />
    </div>
  );
}
