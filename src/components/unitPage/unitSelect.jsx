import React from 'react';
import { Col, Accordion, Row } from 'react-bootstrap';
export default function UnitSelect({
  unit,
  classes,
  emblems,
  selectedUnit,
  selectedClass,
  selectedEmblem,
  setSelectedUnit,
  setSelectedEmblem,
  setSelectedClass,
}) {
  return (
    <Col xs={12} md={4} className="unit-select left">
      <Accordion className="accordion-list">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Units ({selectedUnit.name})</Accordion.Header>
          <Accordion.Body>
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
          <Accordion.Header>Classes ({selectedClass.name})</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Unique Classes</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes.find(e => e.unique === selectedUnit.name) ? (
                      classes
                        .filter(e => e.unique === selectedUnit.name)
                        .map(e => {
                          return (
                            <Col key={e.name}>
                              <span
                                className="select"
                                onClick={() => setSelectedClass(e)}>
                                {e.name}
                              </span>
                            </Col>
                          );
                        })
                    ) : (
                      <div>This unit has no unique classes</div>
                    )}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Backups</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Backup' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              key={e.name}
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Mystic</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Mystical' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cavalry</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Cavalry' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Flying</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Flying' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Armor</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Armor' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Covert</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Covert' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Qi Adept</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {classes
                      .filter(e => {
                        return e.type == 'Qi Adept' && e.unique === undefined;
                      })
                      .map(e => {
                        return (
                          <Col key={e.name} xs={6}>
                            <span
                              className="select"
                              onClick={() => setSelectedClass(e)}>
                              {e.name}
                            </span>
                          </Col>
                        );
                      })}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Emblems ({selectedEmblem.name})</Accordion.Header>

          <Accordion.Body>
            {emblems.map(e => {
              return (
                <img
                  key={e.name}
                  className="image-select"
                  src={e.image}
                  alt={e.name}
                  onClick={() => setSelectedEmblem(e)}
                />
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}
