import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function UnitCard({ unit }) {
  return (
    <Card className="card unit-card">
      <Card.Img className="card-image" variant="top" src={unit.image} />

      <Card.Title as="h2">
        <span className="name">{unit.name}</span>
      </Card.Title>

      <Card.Text>Starting Class: {unit.class}</Card.Text>
      <Card.Text>Starting SP: {unit.sp}</Card.Text>

      <Card.Text>Innate Skill: {unit.innate}</Card.Text>
      <Card.Text>Personal Skill: {unit.personal.name}</Card.Text>
    </Card>
  );
}
