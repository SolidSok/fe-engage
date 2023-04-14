import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ClassCard({ selectedClass }) {
  return (
    <Card className="card">
      <h3>{selectedClass.name}</h3>

      {selectedClass.skill !== null ? (
        <Card.Text>
          {selectedClass.skill.name}: {selectedClass.skill.description}
        </Card.Text>
      ) : null}
      <Card.Text>Type: {selectedClass.type}</Card.Text>
      <Card.Text>
        Weapons:{' '}
        {selectedClass.weapons.map(weapon => (
          <React.Fragment key={weapon.name}>
            <br />
            {weapon.name} ({weapon.rank})
          </React.Fragment>
        ))}
      </Card.Text>

      {selectedClass.weakness !== undefined ? (
        <Card.Text>Weakness: {selectedClass.weakness}</Card.Text>
      ) : null}

      {/* <Link to={`/classes/${selectedClass.name}`}>
        <Button>Learn more....</Button>{' '}
      </Link> */}
    </Card>
  );
}
