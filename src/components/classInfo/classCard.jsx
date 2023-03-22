import React from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function ClassCard({ selectedClass }) {
  return (
    <Card className="card">
      <h3>{selectedClass.name}</h3>

      {selectedClass.skill !== null ? (
        <Card.Text>Skill: {selectedClass.skill.name}</Card.Text>
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

      {
        //figure out selectedClass.weakness.map is not a function error
        /* {selectedClass.weakness ? (
        <Card.Text>
          weakness:{' '}
          {selectedClass.weakness.map(weakness => {
            <React.Fragment key={weakness}>{weakness}</React.Fragment>;
          })}
        </Card.Text>
      ) : null} */
      }
    </Card>
  );
}
