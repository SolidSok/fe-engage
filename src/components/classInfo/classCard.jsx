import React from 'react';
import { Card } from 'react-bootstrap';

export default function ClassCard(classes) {
  return (
    <Card>
      <Card.Title>{classes.name}</Card.Title>
      <Card.Text>Skill: {classes.skill}</Card.Text>
      <Card.Text>weapons: {classes.weapons}</Card.Text>
      <Card.Text>type: {classes.type}</Card.Text>
    </Card>
  );
}
