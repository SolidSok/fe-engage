import React, { useEffect, useState } from 'react';
import UnitCard from './unitCard';
import unitData from './unitData';
import classData from '../classInfo/classData';
import emblemData from '../emblemInfo/emblemData';
import { Col, Container, Row } from 'react-bootstrap';
import UnitSelect from './unitSelect';
import StatBox from './statBox';

export default function UnitInfo() {
  const units = unitData;
  const classes = classData;
  const emblems = emblemData;
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [selectedEmblem, setSelectedEmblem] = useState(emblems[0]);
  const [selectedClass, setSelectedClass] = useState(
    classes.find(e => e.name === selectedUnit.class)
  );

  useEffect(() => {
    setSelectedClass(classes.find(e => e.name === selectedUnit.class));
  }, [selectedUnit]);

  return (
    <Container className="page">
      <Row>
        {' '}
        <h1>Units</h1>
      </Row>
      <Row>
        <UnitSelect
          unit={units}
          classes={classes}
          emblems={emblems}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          setSelectedEmblem={setSelectedEmblem}
          setSelectedClass={setSelectedClass}
        />
        <Col xs={12} md={6} className="unit-card right">
          {' '}
          <UnitCard unit={selectedUnit} />
        </Col>
      </Row>
      <Row>
        <StatBox
          selectedUnit={selectedUnit}
          selectedClass={selectedClass}
          selectedEmblem={selectedEmblem}
        />
      </Row>
    </Container>
  );
}
