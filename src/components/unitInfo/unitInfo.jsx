import React, { useState } from 'react';
import UnitCard from './unitCard';
import unitData from './unitData';
import classData from '../classInfo/classData';
import emblemData from '../emblemInfo/emblemData';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';

export default function UnitInfo() {
  const unit = unitData;
  const classes = classData;
  const emblems = emblemData;
  const [selectedUnit, setSelectedUnit] = useState(unit[0]);

  return (
    <Container className="page">
      <Row>
        {' '}
        <h1>Units</h1>
      </Row>
      <Row>
        <Col className="unit-select left">
          {unit.map(e => {
            return (
              <img
                key={e.name}
                className="image-select"
                src={e.image}
                alt={e.name}
                onClick={() => setSelectedUnit(e)}
              />
            );
          })}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {' '}
                <div className="class-select">classes</div>
              </Accordion.Header>
              <Accordion.Body>
                alsjdalkjflkjasdflkjasdfjklasfjl ajsldaslkjdlasjd asjdaslkjdal
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {' '}
                <div className="emblem-select">emblem selection</div>
              </Accordion.Header>

              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col className="unit-card right">
          {' '}
          <UnitCard unit={selectedUnit} />
        </Col>
      </Row>
    </Container>
  );
}
