import React from 'react';
import Table from 'react-bootstrap/Table';

import { useParams } from 'react-router-dom';
import unitData from './unitData';
export default function UnitView() {
  const { name } = useParams();
  const unit = unitData.find(u => u.name === name);
  return (
    <div>
      <h2> {unit.name}</h2>
      <p>{unit.class}</p>
      <p>{unit.innate}</p>
      <p>{unit.origin}</p>
      <p>
        {unit.personal.name}: {unit.personal.description}
      </p>
      <Table className="stat-box" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Personal Growth Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HP</td>
            <td>{unit.growths.hp}</td>
          </tr>
          <tr>
            <td>STR</td>
            <td>{unit.growths.str}</td>
          </tr>
          <tr>
            <td>MAG</td>
            <td>{unit.growths.mag}</td>
          </tr>{' '}
          <tr>
            <td>DEX</td>
            <td>{unit.growths.dex}</td>
          </tr>{' '}
          <tr>
            <td>SPD</td>
            <td>{unit.growths.spd}</td>
          </tr>{' '}
          <tr>
            <td>DEF</td>
            <td>{unit.growths.def}</td>
          </tr>
          <tr>
            <td>RES</td>
            <td>{unit.growths.res}</td>
          </tr>
          <tr>
            <td>LCK</td>
            <td>{unit.growths.lck}</td>
          </tr>
          <tr>
            <td>BLD</td>
            <td>{unit.growths.bld}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
