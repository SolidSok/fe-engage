import React from 'react';
import emblemData from '../emblemData';
import Table from 'react-bootstrap/Table';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function EmblemView() {
  const { name } = useParams();
  const emblem = emblemData.find(e => e.name === name);

  return (
    <Container className="emblem-view">
      <Row>
        <Image className="card-image" src={emblem.image} />
        <h2> {emblem.name}</h2>

        <Table className="stat-box" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>rank</th>
              <th>name</th>
              <th>description</th>
              <th>SP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{emblem.skills[0].bondRank}</td>
              <td>{emblem.skills[0].name}</td>
              <td>{emblem.skills[0].description}</td>
              <td>{emblem.skills[0].sp}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
