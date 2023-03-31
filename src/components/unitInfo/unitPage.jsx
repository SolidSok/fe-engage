import React, { useEffect, useState } from 'react';
import UnitCard from './unitCard';
import unitData from './unitData';
import classData from '../classInfo/classData';
import emblemData from '../emblemInfo/emblemData';
import { Col, Container, Row } from 'react-bootstrap';
import UnitSelect from './unitSelect';
import StatBox from './statBox';
import ClassCard from '../classInfo/classCard';
import EmblemCard from '../emblemInfo/emblemCard';

export default function UnitPage() {
  const units = unitData;
  const classes = classData;
  const emblems = emblemData;
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [selectedEmblem, setSelectedEmblem] = useState(emblems[0]);
  const [selectedClass, setSelectedClass] = useState(
    classes.find(e => e.name === 'Hero')
  );

  // useEffect(() => {
  //   setSelectedClass(classes.find(e => e.name === selectedUnit.class));
  // }, [selectedUnit]);

  return (
    <Container className="page">
      <Row>
        <Col xs={12} md={12}>
          <h1>Unit Builder</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <UnitCard unit={selectedUnit} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {' '}
          <ClassCard selectedClass={selectedClass} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {' '}
          <EmblemCard emblem={selectedEmblem} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={6}>
          {' '}
          <UnitSelect
            unit={units}
            classes={classes}
            emblems={emblems}
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
            setSelectedEmblem={setSelectedEmblem}
            setSelectedClass={setSelectedClass}
          />
        </Col>
        <Col xs={12} md={8} lg={6} className="unit-card right">
          {' '}
          <StatBox
            selectedUnit={selectedUnit}
            selectedClass={selectedClass}
            selectedEmblem={selectedEmblem}
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
