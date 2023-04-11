import React from 'react';
import classData from '../classData';
import Table from 'react-bootstrap/Table';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ClassView() {
  const { name } = useParams();
  const selectedClass = classData.find(e => e.name === name);
  return (
    <Container>
      {selectedClass.name}
      {selectedClass.skill !== null ? (
        <Table className="stat-box" striped bordered hover variant="dark">
          <thead>
            <th>Name</th>
            <th>Description</th>
          </thead>
          <tbody>
            <td>{selectedClass.skill.name}</td>
            <td>{selectedClass.skill.description}</td>
          </tbody>
        </Table>
      ) : null}
    </Container>
  );
}
