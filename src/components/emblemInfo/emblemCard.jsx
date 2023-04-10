import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './emblemCard.css';

export default function EmblemCard({ emblem }) {
  return (
    <Card className="card">
      <Card.Img className="emblem-image" variant="top" src={emblem.image} />

      <Card.Title as="h2">
        <span className="name">{emblem.name}</span>
      </Card.Title>
      {emblem.name !== 'No Emblem' && (
        <div>
          {' '}
          <Card.Subtitle>
            <span className="subtitle"> Emblem of {emblem.title}</span>
          </Card.Subtitle>
          <br />
          <Card.Text>Stat Boosts: {emblem.stats}</Card.Text>
        </div>
      )}
      <Link to={`/emblems/${emblem.name}`}>
        <Button>Learn more...</Button>
      </Link>
    </Card>
  );
}
