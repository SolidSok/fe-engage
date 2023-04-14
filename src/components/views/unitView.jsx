import React from 'react';
import Table from 'react-bootstrap/Table';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import unitData from '../data/unitData';

import './unitView.css';

export default function UnitView() {
  const { name } = useParams();
  const unit = unitData.find(u => u.name === name);
  return (
    <Container className="unit-view">
      <Row>
        <Col lg={6}>
          <Image className="card-image" src={unit.image} />
          <h2> {unit.name}</h2>
          <p>Starting Class: {unit.class}</p>
          <p>Innate Proficiency: {unit.innate}</p>
          <p>Origin: {unit.origin}</p>
          <Table variant="dark">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{unit.personal.name}</td>
                <td> {unit.personal.description}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={6}>
          <Table className="stat-box" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Personal Growth Rate</th>
                <th>Stat Limits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{unit.growths.hp}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>STR</td>
                <td>{unit.growths.str}</td>
                <td>{unit.maxStats.str}</td>
              </tr>
              <tr>
                <td>MAG</td>
                <td>{unit.growths.mag}</td>
                <td>{unit.maxStats.mag}</td>
              </tr>
              <tr>
                <td>DEX</td>
                <td>{unit.growths.dex}</td>
                <td>{unit.maxStats.dex}</td>
              </tr>
              <tr>
                <td>SPD</td>
                <td>{unit.growths.spd}</td>
                <td>{unit.maxStats.spd}</td>
              </tr>
              <tr>
                <td>DEF</td>
                <td>{unit.growths.def}</td>
                <td>{unit.maxStats.def}</td>
              </tr>
              <tr>
                <td>RES</td>
                <td>{unit.growths.res}</td>
                <td>{unit.maxStats.res}</td>
              </tr>
              <tr>
                <td>LCK</td>
                <td>{unit.growths.lck}</td>
                <td>{unit.maxStats.lck}</td>
              </tr>
              <tr>
                <td>BLD</td>
                <td>{unit.growths.bld}</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
