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
        <Col xs={12} md={6} className="unit-select left">
          <Accordion className="accordion-list">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Units</Accordion.Header>
              <Accordion.Body>
                {' '}
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
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {' '}
                <div className="class-select">classes</div>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Unique Classes</Accordion.Header>
                    <Accordion.Body>
                      {classes.find(e => e.unique === selectedUnit.name) ? (
                        classes
                          .filter(e => e.unique === selectedUnit.name)
                          .map(e => {
                            return <div>{e.name}</div>;
                          })
                      ) : (
                        <div>This unit has no unique classes</div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Backups</Accordion.Header>
                    <Accordion.Body>
                      {classes
                        .filter(e => {
                          return e.type == 'Backup' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Mystic</Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      {classes
                        .filter(e => {
                          return e.type == 'Mystical' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Cavalry</Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      {classes
                        .filter(e => {
                          return e.type == 'Cavalry' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Flying</Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      {classes
                        .filter(e => {
                          return e.type == 'Flying' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Armor</Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      {classes
                        .filter(e => {
                          return e.type == 'Armor' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Covert</Accordion.Header>
                    <Accordion.Body>
                      {' '}
                      {classes
                        .filter(e => {
                          return e.type == 'Covert' && e.unique === undefined;
                        })
                        .map(e => {
                          return <div>{e.name}</div>;
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {' '}
                <div className="emblem-select">emblem selection</div>
              </Accordion.Header>

              <Accordion.Body>
                {emblems.map(e => {
                  return (
                    <img
                      key={e.name}
                      className="image-select"
                      src={e.image}
                      alt={e.name}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} md={6} className="unit-card right">
          {' '}
          <UnitCard unit={selectedUnit} />
          <div>stats</div>
        </Col>
      </Row>
    </Container>
  );
}
