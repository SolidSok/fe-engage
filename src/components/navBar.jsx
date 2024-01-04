import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function EngageNav() {
  return (
    <Container>
      {' '}
      <Outlet />
    </Container>
  );
}
