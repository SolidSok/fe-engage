import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './emblemCard.css';

export default function EmblemCard({ emblem }) {
  return (
    <Card className="emblem-card">
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Title as="h2">{emblem.name}</Card.Title>
      <Card.Subtitle>Emblem of {emblem.title}</Card.Subtitle>
      <Card.Text>Stats: {emblem.stats}</Card.Text>

      <Button>More info</Button>
    </Card>
  );
}
