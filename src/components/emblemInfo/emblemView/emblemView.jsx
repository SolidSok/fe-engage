import React from 'react';
import emblemData from '../emblemData';
import Table from 'react-bootstrap/Table';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './emblemView.css';
export default function EmblemView() {
  const { name } = useParams();
  const emblem = emblemData.find(e => e.name === name);

  return (
    <Container className="emblem-view">
      <Row>
        <Col>
          {' '}
          <Image className="card-image" src={emblem.image} />
          <h2> {emblem.name}</h2>
          <p>Emblem of {emblem.title}</p>
          <p>Stat Boosts: {emblem.stats}</p>
        </Col>
      </Row>
      <Row>
        <Table className="stat-box" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Description</th>
              <th>SP</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {emblem.skills.map(skill => {
              return (
                <tr>
                  <td>{skill.bondRank}</td>
                  <td>{skill.name}</td>
                  <td>{skill.description}</td>
                  <td>{skill.sp}</td>
                  <td>
                    {skill.sync === true ? 'Sync Skill' : null}
                    {skill.engage === 'weapon' ? 'Engage Weapon' : null}
                    {skill.engage === 'skill' ? 'Engage Skill' : null}
                    {skill.engage === 'attack' ? 'Engage Attack' : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
