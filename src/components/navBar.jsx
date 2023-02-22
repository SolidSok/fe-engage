import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {' '}
      <nav className="navbar"></nav>
      <Outlet />
    </>
  );
}
