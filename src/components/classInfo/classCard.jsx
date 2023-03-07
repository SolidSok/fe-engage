import React from 'react';
import { Card } from 'react-bootstrap';

export default function ClassCard({ classes }) {
  return (
    <Card className="card">
      <Card.Title>{classes.name}</Card.Title>
      {classes.skill !== null ? (
        <Card.Text>Skill: {classes.skill.name}</Card.Text>
      ) : null}
      {/* <Card.Text>
        Weapons:{' '}
        {classes.weapons.map(weapon => (
          <React.Fragment key={weapon.name}>
            <br />
            {weapon.name} ({weapon.rank})
          </React.Fragment>
        ))}
      </Card.Text> */}
      <Card.Text>Type: {classes.type}</Card.Text>

      {
        //figure out classes.weakness.map is not a function error
        /* {classes.weakness ? (
        <Card.Text>
          weakness:{' '}
          {classes.weakness.map(weakness => {
            <React.Fragment key={weakness}>{weakness}</React.Fragment>;
          })}
        </Card.Text>
      ) : null} */
      }
    </Card>
  );
}
